import React, { useState } from 'react';

const UserCard = ({user}) => {
    return(
        <>
            <section className="component-outline">
                <h3
                  className="user-name"
                >
                  {user.name}
                </h3>
                <span><em>{user.username}</em></span>
                <img src={user.avatar_url} alt={`Photo of ${user.username}`} className="article-image" />
            </section>
        </>
    )
}

export default UserCard;