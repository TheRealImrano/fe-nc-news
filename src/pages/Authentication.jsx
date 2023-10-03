import { useEffect, useState } from 'react';
import { fetchAllUsers } from '../utils/api';
import UserCard from '../components/UserCard';

const Authentication = () => {
    const [loading, setLoading] = useState(true);
    const [usersList, setUsersList]  = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
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
                        <UserCard user={user} />
                    </li>
                ))}
                </ul>
            </main>
        </>
    )
}

export default Authentication;