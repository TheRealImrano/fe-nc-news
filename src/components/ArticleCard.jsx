const ArticleCard = ({article}) => {
    return (
        <section className="component-outline">
            <p>
                {article.author}, {article.created_at} <br />
                {article.topic}
            </p>
            <button>count: {article.comment_count}</button>
            <button>upvote</button>
            <button>downvote</button>
            <h4>{article.title}</h4>
            {article.article_img_url && (
                <img src={article.article_img_url} alt={`picture displaying ${article.topic}`} />
            )}
        </section>
    )
}

export default ArticleCard;