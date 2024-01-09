import { useEffect, useState } from "react";
import { fetchCategories } from "../utils/api";
import {Link} from 'react-router-dom'

const NavBase = () => {
    const [topics, setTopics] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCategories()
          .then((data) => {
            setTopics(data.topics);
            setLoading(false);
            console.log(data.topics);
          })
          .catch((error) => {
            console.error('Error fetching topics:', error);
            setLoading(false);
          });
      }, []);

      if (loading) {
        return <div>Loading...</div>;
      }

    return (
        <>
        <nav className="component-outline">
          <h2>Filter by topics:</h2>
            <ul className="topics-list">
            {topics.map((topic) => (
                <li key={`k${topic.slug}`} className="topic-item" data-description={topic.description}>
                    <Link to={`/topics/${topic.slug}`}>{topic.slug}</Link>
                </li>
            ))}
            </ul>
        </nav>
        </>
    )
}


export default NavBase;