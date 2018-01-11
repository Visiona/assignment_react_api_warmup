import React, { Component } from 'react';
import JumbotronFluid from './elements/JumbotronFluid';
import UserList from './UserList';
import UserForm from './UserForm'


const App =({users, isFetching, error, onAddUser}) => (
  <div className="App">
    <JumbotronFluid
      heading='User CRUD'
      lead='Using an API for User CRUD ops'
    />
    <UserList users={users} isFetching={isFetching} />
    <br />
    <br />
    <UserForm onSubmit={onAddUser} error={error} />
    <br />
    <br />
  </div>
)

export default App;
