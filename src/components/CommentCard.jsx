import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import dayjs from 'dayjs';
import 'dayjs/locale/en';
import { deleteComment } from '../utils/api';

const CommentCard = ({comment, setReloadComments}) => {
    const formattedDate = dayjs(comment.created_at).locale('en').format('MMMM D, YYYY h:mm A');
    const { user } = useContext(UserContext);

    const handleDelete = async () => {
        try {
          await deleteComment(comment.comment_id);
          setReloadComments((prev) => !prev);
          window.alert('Comment deleted successfully!');
          onDelete(comment.comment_id);
        } catch (error) {
        }
    };

    const renderDeleteButton = () => {
    if (user.username === comment.author) {
      return (
        <button className="delete-button" title="Delete" onClick={handleDelete}>
        <span role="img" aria-label="Delete" className="delete-icon">
          🗑️
        </span>
        <span className="delete-text">Delete</span>
      </button>
      );
    }
    return null;
    };

    return (
        <>
            <article className="component-outline">
                <p>
                    {comment.author},{' '}
                    <time dateTime={comment.created_at}>{formattedDate}</time>
                </p>
                <p>
                    {comment.body}
                </p>
                <div>
                    <button>upvote</button>
                    <span>{comment.votes}</span>
                    <button>downvote</button>
                    {renderDeleteButton()}
                </div>
            </article>
        </>
    )
}

export default CommentCard;