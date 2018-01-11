import React, {Component} from 'react'
import App from '../components/App'
import serialize from 'form-serialize'

class AppContainer extends Component {

  constructor() {
    super()
    this.state = {
      users: [],
      isFetching: false,
      error: null
    }
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

  onAddUser =(e) => {
    e.preventDefault()
    const form = e.target
    const body = serialize(form, {hash: true})
    console.log(body)

    const headers = new Headers()
    headers.append('Content-Type', 'application/json')

    const options = {
      headers,
      method: 'POST',
      body: JSON.stringify(body)
    }

    this.setState({isFetching: true})

    fetch('https://reqres.in/api/users', options)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`)
      }
      return response.json()
    })
    .then((json) => {
      this.setState({
        isFetching: false,
        users: [...this.state.users, json]
      }, ()=> {form.reset()})
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
    return (
      <App onAddUser={this.onAddUser} {...this.state} />
    )
  }
}


export default AppContainer
