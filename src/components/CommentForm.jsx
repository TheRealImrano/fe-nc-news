import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { postComment } from "../utils/api";


const CommentForm = ({ article_id, toggleCommentForm, setReloadComments }) => {
    const { user } = useContext(UserContext);
    const [commentBody, setCommentBody] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!user.username) {
            console.log('hi')
            alert('Please log in to post a comment.');
            return;
        }
    
        if (commentBody.trim() === '') {
          alert('Please enter a comment.');
          return;
        }
    
        try {
          await postComment(article_id, user.username, commentBody);
          toggleCommentForm();
          setReloadComments((prev) => !prev);
          window.alert('Comment posted successfully!');
        } catch (error) {
          console.error('Error posting comment:', error);
          throw error;
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
            value={commentBody}
            onChange={(e) => setCommentBody(e.target.value)}
            placeholder="Enter your comment..."
            />
            <button type="submit">Post Comment</button>
            <button type="button" onClick={toggleCommentForm}>
                Cancel
            </button>
        </form>
    );
}

export default CommentForm;