import dayjs from 'dayjs';
import 'dayjs/locale/en';

const CommentCard = ({comment}) => {
    const formattedDate = dayjs(comment.created_at).locale('en').format('MMMM D, YYYY h:mm A');

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
                </div>
            </article>
        </>
    )
}

export default CommentCard;