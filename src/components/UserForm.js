import React from 'react'
import Input from './elements/Input'
import InputGroup from './elements/InputGroup'
import Button from './elements/Button'
import Alert from './elements/Alert'
import Showable from './elements/Showable'

const UserForm = ({onSubmit, currentUser, onChange, onChangeLastName, onChangeAvatar, error}) => (
  <form className="container" onSubmit={onSubmit} >
    <h1>Add New User</h1>

    <Showable show={error} >
      <Alert type='danger'>
        Hueston, is it normal what is going on here now?...
      </Alert>
    </Showable>

    <InputGroup name="first_name" labelText="First Name">
      <Input name="first_name" value={ currentUser.first_name } onChange={onChange('first_name')} />
    </InputGroup>
    <InputGroup name="last_name" labelText="Last Name">
      <Input name="last_name" value={ currentUser.last_name } onChange={onChange('last_name')}/>
    </InputGroup>
    <InputGroup name="avatar" labelText="Photo Link">
      <Input name="avatar" value={ currentUser.avatar } onChange={onChange('avatar')}/>
      <Input name="id" value={ currentUser.id } hidden='true'/>
    </InputGroup>
    <Button type="submit" color="primary">
      Save User
    </Button>
  </form>
)

export default UserForm
