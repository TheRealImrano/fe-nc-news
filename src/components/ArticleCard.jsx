import dayjs from 'dayjs';
import 'dayjs/locale/en';

const ArticleCard = ({article}) => {
    const formattedDate = dayjs(article.created_at).locale('en').format('MMMM D, YYYY h:mm A');

    return (
        <section className="component-outline">
            <p>
                {article.author}, {formattedDate} <br />
                {article.topic}
            </p>
            <button> comment ({article.comment_count})</button>
            <button>upvote</button>
            <button>downvote</button>
            <h4>{article.title}</h4>
            {article.article_img_url && (
                <img src={article.article_img_url} alt={`picture displaying ${article.topic}`} className="article-image"/>
            )}
        </section>
    )
}

export default ArticleCard;