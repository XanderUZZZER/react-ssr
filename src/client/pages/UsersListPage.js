import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/index';

const UsersList = ({ fetchUsers, users }) => {
  useEffect(() => {
    fetchUsers()
  }, []);

  const renderUsers = () => (
    users.map(user => (
      <li key={user.id}>{user.name}</li>
    ))
  )

  return (
    <div>
      <h1>Users list</h1>
      <ul>{renderUsers()}</ul>
    </div>
  )
}

const mapStateToProps = state => ({
  users: state.users
});

const loadData = (store) => (store.dispatch(fetchUsers()));

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(UsersList)
}
