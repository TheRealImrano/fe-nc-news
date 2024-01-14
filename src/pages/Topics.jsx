import { useParams } from "react-router";
import ArticleList from "../components/ArticleList";
import { useState } from "react";
import HomeNav from "../components/HomeNav";

const Topics = () => {
    const [sortAscending, setSortAscending] = useState(false);
    const [sortBy, setSortBy] = useState('created_at');
    const {slug} = useParams();

    const capitalizedSlug = slug.charAt(0).toUpperCase() + slug.slice(1);


    return (
        <>
            <HomeNav sortAscending={sortAscending} setSortAscending={setSortAscending} setSortBy={setSortBy}/>
            <main className="component-outline">
                <h2 className="topic-title component-outline">{`${capitalizedSlug}:`}</h2>
                <section className="component-outline">
                    <ArticleList sortAscending={sortAscending} slug={slug} sortBy={sortBy}/>
                </section>
            </main>
        </>
    )
}

export default Topics;