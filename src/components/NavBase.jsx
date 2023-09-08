import { useEffect, useState } from "react";
import { fetchCategories } from "../utils/api";

const NavBase = () => {
    const [topics, setTopics] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCategories()
          .then((data) => {
            setTopics(data.topics);
            setLoading(false);
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
            <ul>
            {topics.map((topic) => (
                <li key={`k${topic.slug}`} >
                    {topic.slug}
                </li>
            ))}
            </ul>
        </nav>
        </>
    )
}


export default NavBase;