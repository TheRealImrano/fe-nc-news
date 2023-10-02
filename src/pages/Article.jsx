import { useEffect, useState } from "react";
import { fetchArticleByID } from "../utils/api";
import { useParams } from "react-router-dom";
import dayjs from 'dayjs';
import 'dayjs/locale/en';
import CommentList from "../components/CommentList";

const Article = () => {
    const [loading, setLoading] = useState(true);
    const [article, setArticle] = useState({});
    const {article_id} = useParams();
    const formattedDate = dayjs(article.created_at).locale('en').format('MMMM D, YYYY h:mm A');

    useEffect(() => {
        console.log(article_id)
        fetchArticleByID(article_id)
          .then((data) => {
            setArticle(data.article); 
            setLoading(false);
          })
          .catch((error) => {
            console.error('Error fetching articles:', error);
            setLoading(false);
          });
      }, [article_id]);

      if (loading) {
        return <div>Loading...</div>;
      }

 return (
    <>
        <article className="component-outline">
            <p>
                {article.author},{' '}
                <time dateTime={article.created_at}>{formattedDate}</time> <br />
                {article.topic}
            </p>
            <h3>{article.title}</h3>
            {article.article_img_url && (
                <img src={article.article_img_url} alt={`picture displaying ${article.topic}`} className="article-image"/>
            )}
            <p>
                {article.body}
            </p>
            <button> comment ({article.comment_count})</button>
            <div>
            <button>upvote</button>
            <span>{' '}{article.votes}{' '}</span>
            <button>downvote</button>
            </div>
        </article>
        <section>
              <CommentList id={article_id} />
        </section>
    </>
 )
}

export default Article;