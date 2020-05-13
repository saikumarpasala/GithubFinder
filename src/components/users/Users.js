import React, { Component } from 'react'
import UserItem from './UserItem';
import spinner from '../layout/spinner';
import propTypes from 'prop-types';

class Users = ({ users, loading }) => {
    if(loading) {
    
    return <Spinner />
    }else{
        return (
        <div style={userStyle}>
{this.props.users.map(user => (
    <UserItem key={user.id}  user={user} />
))}
        

            </div>
    );
}
}

users.propTypes ={
    users: propTypes.array.isRequired,
    loading: propTypes.bool.isRequired
}

const userStyle = {
    display: 'grid' ,
    griTemplateColums: 'repeat(3, 1fr)',
    gridGap: '1rem'
};

export default Users;