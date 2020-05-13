import React from 'react';
import  propType from 'prop-types';

 const UserItem = ({ user: { login, avatar_url, html_url } })=> {


   return (

    <div className='card text-center'>
           <img
           scr={this.state.avatar_url}
           alt=''
           className='round-img'
           style={{ width: '60px' }}
           />
           <h3>{login}</h3>


          <div>
           <a href={html_url} className="btn btn-dark-sm my-1">more</a>
   </div>
   </div>
   );

};

UserItem.propTypes = {
    user: propType.object.isRequired
};

export default UserItem;