import React, {Component} from 'react'
import UserCard from './UserCard'

const UserList =({users, isFetching, onDeleteUser, onEditUser}) => {
  const userList = users.map((user) =>
    <div className='user-box' key={user.id}>
      <UserCard user={user} key={user.id} />
      <div className="alert alert-info" role="alert">
        <a href="#" className="alert-link" key={user.id}  onClick={(e) => onEditUser(e, user.id)} >Edit</a>
      </div>
      <div className="alert alert-danger" role="alert">
        <a href="#" className="alert-link" key={user.id} onClick={(e) => onDeleteUser(e, user.id)} >Delete</a>
      </div>
    </div>
  )

  return (
    <div className="container">
      <h1>User List</h1>
      <div className="card-group">
        {isFetching ? <p>Loading...</p> : userList}
      </div>
    </div>
  )

}

export default UserList
