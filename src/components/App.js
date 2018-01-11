import React, { Component } from 'react';
import JumbotronFluid from './elements/JumbotronFluid';
import UserList from './UserList';


class App extends Component {

  constructor() {
    super()
    this.state = {
      users: [],
      isFetching: false
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

  render() {
    const {users, isFetching} = this.state

    return (
      <div className="App">
        <JumbotronFluid
          heading='User CRUD'
          lead='Using an API for User CRUD ops'
        />
        <UserList users={users} isFetching={isFetching} />
      </div>
    );
  }
}

export default App;
