import React, { Component } from 'react';
import JumbotronFluid from './elements/JumbotronFluid';
import UserList from './UserList';
import UserForm from './UserForm'


const App =({users, isFetching, error, onAddOrUpdateUser, onEditUser, onDeleteUser, onChange, currentUser}) => (
  <div className="App">
    <JumbotronFluid
      heading='User CRUD'
      lead='Using an API for User CRUD ops'
    />
    <UserList users={users} isFetching={isFetching} onEditUser={onEditUser} onDeleteUser={onDeleteUser} />
    <br />
    <br />
    <UserForm onSubmit={onAddOrUpdateUser} error={error} currentUser={currentUser} onEditUser={onEditUser} onChange={onChange} />
    <br />
    <br />
  </div>
)

export default App;
