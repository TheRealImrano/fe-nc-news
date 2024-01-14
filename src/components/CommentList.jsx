import { useEffect, useState } from "react";
import { fetchArticleComments } from "../utils/api";
import CommentCard from "./CommentCard";
import HttpError from "../pages/HttpError";

const CommentList = ({id, reloadComments, setReloadComments, setErrorRes}) => {
    const [articleComments, setArticleComments] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetchArticleComments(id)
        .then((data)=>{
            setArticleComments(data.comments);
            setLoading(false);
        })
        .catch((error) => {
            console.error('Error fetching comments:', Object.keys(error), error.response.data);
            setLoading(false);
            setErrorRes(error.response.data);
            throw error;
        });
    }, [id, reloadComments])

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <section className="component-outline">
            <ul>
                {articleComments.map((comment)=>(
                    <li key={`k${comment.comment_id}`}>
                        <CommentCard comment={comment} setReloadComments={setReloadComments} setErrorRes={setErrorRes} />
                    </li>
                ))}
            </ul>
        </section>
    )
}


export default CommentList;