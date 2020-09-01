import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions/index';
import requireAuth from "../components/hocs/requireAuth";

const AdminsList = ({ fetchAdmins, admins }) => {
  useEffect(() => {
    fetchAdmins()
  }, []);

  const renderAdmins = () => (
    admins.map(admin => (
      <li key={admin.id}>{admin.name}</li>
    ))
  )

  return (
    <div>
      <h1>Admins list</h1>
      <ul>{renderAdmins()}</ul>
    </div>
  )
}

const mapStateToProps = state => ({
  admins: state.admins
});

const loadData = (store) => (store.dispatch(fetchAdmins()));

export default {
  loadData,
  component: connect(mapStateToProps, { fetchAdmins })(requireAuth(AdminsList))
}
