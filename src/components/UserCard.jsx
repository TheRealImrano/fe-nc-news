import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const UserCard = ({selectedUser}) => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleUserSelect = () => {
    setUser((prevState) => ({
      ...prevState,
      name: selectedUser.name,
      username: selectedUser.username
    }));

    navigate(-1);
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