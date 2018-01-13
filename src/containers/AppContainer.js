import React, {Component} from 'react'
import App from '../components/App'
import serialize from 'form-serialize'

class AppContainer extends Component {

  constructor() {
    super()
    this.state = {
      users: [],
      currentUser: {
        first_name: '',
        last_name: '',
        avatar: '',
        id: ''
      },
      isFetching: false,
      error: null
    }

    this.onChange = this.onChange.bind(this)
  }

  componentDidMount() {
    this.setState({isFetching: true})
    fetch('https://reqres.in/api/users?delay=3')
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          users: json.data,
          isFetching: false,
        })
      })
  }

  onChange = fieldName => e => this.setState({
    currentUser: {
      ...this.state.currentUser,
      [fieldName]: e.target.value || this.state.currentUser.fieldName || '',
    }
  })


  onAddOrUpdateUser =(e) => {
    e.preventDefault();
    const form = e.target;
    const body = serialize(form, {hash: true})

    const headers = new Headers()
    headers.append('Content-Type', 'application/json');
    const method = body.id ? 'PATCH' : 'POST';
    let url = 'https://reqres.in/api/users';
    url += body.id ? `/${body.id}` : '';

    const options = {
      headers,
      method,
      body: JSON.stringify(body)
    }
    let userToUpdate = this.state.users.filter(user => parseInt(user.id) === parseInt(body.id) )

    this.setState({isFetching: true})

    fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`)
      }
      return response.json()
    })
    .then((json) => {
      if (method == 'POST') {
        this.setState({
          isFetching: false,
          users: [...this.state.users, json],
          currentUser: {
            first_name: '',
            last_name: '',
            avatar: '',
            id: ''
          },
        }, ()=> {form.reset()})
      } else {
        this.state.users.pop(userToUpdate)
        this.setState({
          isFetching: false,
          users: [...this.state.users, json],
          currentUser: {
            first_name: '',
            last_name: '',
            avatar: '',
            id: ''
          },
        }, ()=> {form.reset()})
      }
    })
    .catch((error) => {
      console.log(error)
      this.setState({
        isFetching: false,
        error
      })
    })
  }

  onEditUser = (e, userId) => {
    e.preventDefault()
    const getUser = this.state.users.filter(user => user.id === userId )

    this.setState({
      currentUser: getUser[0]
    })

  }




  onDeleteUser = (e, delId) => {
    e.preventDefault()
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')

    const arrAfterDeletion = this.state.users.filter(user => user.id !== delId )
    const options = {
      headers,
      method: 'DELETE'
    }

    this.setState({ isFetching: true })

    fetch('https://reqres.in/api/users/' + delId, options)
    .then( (response) => {
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`)
      }
      return response.json
    }).then((json) => {
      this.setState({
        users: arrAfterDeletion,
        isFetching: false
      })
    })
    .catch((error) => {
      console.log(error)
      this.setState({
        isFetching: false,
        error
      })
    })

  }


  render() {
  const { users,
      isFetching,
      error,
      currentUser
    } = this.state;
    return (
      <App onAddOrUpdateUser={this.onAddOrUpdateUser}
          onEditUser={this.onEditUser}
          onDeleteUser={this.onDeleteUser}
          onChange={this.onChange}
            {...this.state}
      />
    )
  }
}


export default AppContainer
