import { useEffect, useState } from 'react';
import { fetchAllUsers } from '../utils/api';
import UserCard from '../components/UserCard';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { PageContext } from '../contexts/PageContext';

const Authentication = () => {
    const [loading, setLoading] = useState(true);
    const [usersList, setUsersList]  = useState([]);
    const [error, setError] = useState(null);
    const { user, setUser } = useContext(UserContext);
    const { setPage } = useContext(PageContext);
    

    useEffect(() => {
        setPage('Login Page')
        fetchAllUsers()
          .then((data) => {
            setUsersList(data.users); 
            setLoading(false);
          })
          .catch((error) => {
            console.error('Error fetching users:', error);
            setError(error);
            setLoading(false);
          });
      }, []);

    if (loading) {
      return <div>Loading...</div>;
    };

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return(
        <>
            <main className="component-outline">
                <ul>
                {usersList.map((user) => (
                    <li key={`k${user.username}`} >
                        <UserCard selectedUser={user} />
                    </li>
                ))}
                </ul>
            </main>
        </>
    )
}

export default Authentication;