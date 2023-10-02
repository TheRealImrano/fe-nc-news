import dayjs from 'dayjs';
import 'dayjs/locale/en';
import {Link} from 'react-router-dom'

const ArticleCard = ({article}) => {
    const formattedDate = dayjs(article.created_at).locale('en').format('MMMM D, YYYY h:mm A');

    return (
        <article className="component-outline">
             <p>
                {article.author},{' '}
                <time dateTime={article.created_at}>{formattedDate}</time> <br />
                {article.topic}
            </p>
            <Link to={`/articles/${article.article_id}`}>
                <button> comment ({article.comment_count})</button>
            </Link>
            <div>
            <button>upvote</button>
            <span>{article.votes}</span>
            <button>downvote</button>
            </div>
            <Link to={`/articles/${article.article_id}`}>
                <h4>{article.title}</h4>
            </Link>
            {article.article_img_url && (
                <img src={article.article_img_url} alt={`picture displaying ${article.topic}`} className="article-image"/>
            )}
        </article>
    )
}

export default ArticleCard;