import ArticleCard from "./ArticleCard";
import { useEffect, useState, useContext } from 'react';
import { fetchAllArticles } from '../utils/api';
import { PageContext } from '../contexts/PageContext';

const ArticleList = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const { setPage } = useContext(PageContext);

    const urlEndpoint = `/api/articles${props.sortAscending ? '?order=asc' : ''}`

    const order = props.sortAscending ? '?order=asc' : '';

    const topic = props.slug ? `topic=${props.slug}` : '';

    useEffect(()=>{
      setPage('Home Page')
    }, [])

    useEffect(() => {
        fetchAllArticles({order, topic})
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