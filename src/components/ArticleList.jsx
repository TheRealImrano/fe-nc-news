import ArticleCard from "./ArticleCard";
import { useEffect, useState } from 'react';
import { fetchData } from '../utils/api';

const ArticleList = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    const urlEndpoint = `/api/articles${props.sortAscending ? '?order=asc' : ''}`

    useEffect(() => {
        fetchData(urlEndpoint)
          .then((data) => {
            setArticles(data.articles); 
            setLoading(false);
          })
          .catch((error) => {
            console.error('Error fetching articles:', error);
            setLoading(false);
          });
      }, [urlEndpoint]);

      if (loading) {
        return <div>Loading...</div>;
      }

    return (
        <section className="component-outline">
        <ul>
        {articles.map((article) => (
            <li key={`k${article.article_id}`} >
                <ArticleCard article={article} />
            </li>
        ))}
        </ul>
        </section>
    )
}

export default ArticleList;