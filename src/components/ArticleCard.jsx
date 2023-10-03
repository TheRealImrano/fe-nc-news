import React, { useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/en';
import {Link} from 'react-router-dom'
import { updateArticleVotes } from '../utils/api';

const ArticleCard = ({article}) => {
    const formattedDate = dayjs(article.created_at).locale('en').format('MMMM D, YYYY h:mm A');
    const [voteStatus, setVoteStatus] = useState(null);
    const [voteCount, setVoteCount] = useState(article.votes);

    const handleUpvote = () => {
        if (voteStatus === 'upvoted') {
          // User is undoing an upvote
          setVoteStatus(null);
          setVoteCount((prevCount) => prevCount - 1); // Decrement voteCount locally
          updateArticleVotes(article.article_id, -1); // Make the API call to update votes
        } else if (voteStatus === null){
          // User is upvoting
          setVoteStatus('upvoted');
          setVoteCount((prevCount) => prevCount + 1); // Increment voteCount locally
          updateArticleVotes(article.article_id, 1); // Make the API call to update votes
        } else if (voteStatus === 'downvoted'){
          // User is upvoting
          setVoteStatus('upvoted');
          setVoteCount((prevCount) => prevCount + 2); // Increment voteCount locally
          updateArticleVotes(article.article_id, 2); // Make the API call to update votes
        }
      };
      
      const handleDownvote = () => {
        if (voteStatus === 'downvoted') {
          // User is undoing a downvote
          setVoteStatus(null);
          setVoteCount((prevCount) => prevCount + 1); // Increment voteCount locally
          updateArticleVotes(article.article_id, 1); // Make the API call to update votes
        } else if (voteStatus === null){
          // User is downvoting
          setVoteStatus('downvoted');
          setVoteCount((prevCount) => prevCount - 1); // Decrement voteCount locally
          updateArticleVotes(article.article_id, -1); // Make the API call to update votes
        } else if (voteStatus === 'upvoted'){
          // User is downvoting
          setVoteStatus('downvoted');
          setVoteCount((prevCount) => prevCount - 2); // Decrement voteCount locally
          updateArticleVotes(article.article_id, -2); // Make the API call to update votes
        }
      };

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
            <button
                onClick={handleUpvote}
                className={voteStatus === 'upvoted' ? 'upvoted-button' : ''}
            >
                upvote
            </button>
            <span>{' '}{voteCount}{' '}</span>
            <button
                onClick={handleDownvote}
                className={voteStatus === 'downvoted' ? 'downvoted-button' : ''}
            >
                downvote
            </button>
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