import React, { useContext, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext';

const UserCard = ({selectedUser}) => {
  const { user, setUser } = useContext(UserContext);

  // useEffect(() => {
  //   console.log(user);
  // }, [user]);

  const handleUserSelect = () => {
    setUser(selectedUser.name);
  };

    return(
        <>
            <section className="component-outline">
                <h3 className="user-name" onClick={handleUserSelect}>
                  {selectedUser.name}
                </h3>
                <span><em>{selectedUser.username}</em></span>
                <img src={selectedUser.avatar_url} alt={`Photo of ${selectedUser.username}`} className="article-image" />
            </section>
        </>
    )
}

export default UserCard;