import { useParams } from "react-router";
import ArticleList from "../components/ArticleList";
import { useState } from "react";
import HomeNav from "../components/HomeNav";
import HttpError from "./HttpError";

const Topics = () => {
    const [sortAscending, setSortAscending] = useState(false);
    const [sortBy, setSortBy] = useState('created_at');
    const [errorRes, setErrorRes] = useState({})
    const {slug} = useParams();

    const capitalizedSlug = slug.charAt(0).toUpperCase() + slug.slice(1);

    if (errorRes.code && errorRes.msg){
        return <HttpError res={errorRes} />
    }


    return (
        <>
            <HomeNav sortAscending={sortAscending} setSortAscending={setSortAscending} setSortBy={setSortBy}/>
            <main className="component-outline">
                <h2 className="topic-title component-outline">{`${capitalizedSlug}:`}</h2>
                <section className="component-outline">
                    <ArticleList sortAscending={sortAscending} slug={slug} sortBy={sortBy} setErrorRes={setErrorRes} />
                </section>
            </main>
        </>
    )
}

export default Topics;