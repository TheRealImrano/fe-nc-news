import { useEffect, useState, useContext } from "react";
import { fetchArticleByID } from "../utils/api";
import { useParams } from "react-router-dom";
import dayjs from 'dayjs';
import 'dayjs/locale/en';
import CommentList from "../components/CommentList";
import { updateArticleVotes } from '../utils/api';
import { PageContext } from '../contexts/PageContext';
import CommentForm from "../components/CommentForm";
import { UserContext } from '../contexts/UserContext';
import HttpError from "./HttpError";

const Article = () => {
    const [loading, setLoading] = useState(true);
    const [article, setArticle] = useState({});
    const [voteStatus, setVoteStatus] = useState(null);
    const [voteCount, setVoteCount] = useState('loading...');
    const [showCommentForm, setShowCommentForm] = useState(false);
    const {article_id} = useParams();
    const formattedDate = dayjs(article.created_at).locale('en').format('MMMM D, YYYY h:mm A');
    const { setPage } = useContext(PageContext);
    const { user } = useContext(UserContext);
    const [reloadComments, setReloadComments] = useState(false);
    const [errorRes, setErrorRes] = useState({});

    const handleUpvote = () => {
      if (voteStatus === 'upvoted') {
        setVoteStatus(null);
        setVoteCount((prevCount) => prevCount - 1); 
        updateArticleVotes(article.article_id, -1); 
      } else if (voteStatus === null){
        setVoteStatus('upvoted');
        setVoteCount((prevCount) => prevCount + 1); 
        updateArticleVotes(article.article_id, 1); 
      } else if (voteStatus === 'downvoted'){
        setVoteStatus('upvoted');
        setVoteCount((prevCount) => prevCount + 2); 
        updateArticleVotes(article.article_id, 2); 
      }
    };
    
    const handleDownvote = () => {
      if (voteStatus === 'downvoted') {
        setVoteStatus(null);
        setVoteCount((prevCount) => prevCount + 1); 
        updateArticleVotes(article.article_id, 1); 
      } else if (voteStatus === null){
        setVoteStatus('downvoted');
        setVoteCount((prevCount) => prevCount - 1); 
        updateArticleVotes(article.article_id, -1); 
      } else if (voteStatus === 'upvoted'){
        setVoteStatus('downvoted');
        setVoteCount((prevCount) => prevCount - 2); 
        updateArticleVotes(article.article_id, -2); 
      }
    };

    const toggleCommentForm = () => {
      if (!user.username) {
        alert('Please log in to post a comment.');
        return;
      }
      setShowCommentForm(!showCommentForm);
    };
    

    useEffect(() => {
      fetchArticleByID(article_id)
        .then((data) => {
          setArticle(data.article); 
          setVoteCount(data.article.votes)
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching articles:', error);
          setLoading(false);
          setErrorRes(error.response.data);
          throw error;
        });
    }, [article_id]);

    useEffect(()=>{
      setPage('Comments Section');
    }, [])

    if (errorRes.code && errorRes.msg){
      return <HttpError res={errorRes} />
    }

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
            <button onClick={toggleCommentForm}>
              comment ({article.comment_count})
            </button>
        </article>
        <section>
          {user.name && user.username && showCommentForm && (
            <CommentForm article_id={article_id} toggleCommentForm={toggleCommentForm} setReloadComments={setReloadComments} setErrorRes={setErrorRes} />
          )}
              <CommentList id={article_id} reloadComments={reloadComments} setReloadComments={setReloadComments} setErrorRes={setErrorRes} />
        </section>
    </>
 )
}

export default Article;