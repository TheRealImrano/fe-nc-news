import { useEffect, useState } from "react";
import { fetchArticleComments } from "../utils/api";
import CommentCard from "./CommentCard";

const CommentList = ({id}) => {
    const [articleComments, setArticleComments] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        console.log(id)
        fetchArticleComments(id)
        .then((data)=>{
            setArticleComments(data.comments);
            console.log(data.comments);
            setLoading(false);
        })
        .catch((error) => {
            console.error('Error fetching comments:', error);
            setLoading(false);
        });
    }, [])

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <section className="component-outline">
            <ul>
                {articleComments.map((comment)=>(
                    <li key={`k${comment.comment_id}`}>
                        <CommentCard comment={comment} />
                    </li>
                ))}
            </ul>
        </section>
    )
}


export default CommentList;