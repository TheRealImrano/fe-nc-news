import ArticleCard from "./ArticleCard";
import { useEffect, useState } from 'react';
import { fetchData } from '../utils/api';

const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData('/api/articles')
          .then((data) => {
            setArticles(data.articles); 
            setLoading(false);
          })
          .catch((error) => {
            console.error('Error fetching articles:', error);
            setLoading(false);
          });
      }, []);

      if (loading) {
        return <div>Loading...</div>;
      }

    return (
        <div className="component-outline">
        <ul>
        {articles.map((article) => (
            <li key={`k${article.article_id}`} >
                <ArticleCard article={article} />
            </li>
        ))}
        </ul>
        </div>
    )
}

export default ArticleList;