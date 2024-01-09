import { useParams } from "react-router";
import ArticleList from "../components/ArticleList";
import { useState } from "react";
import HomeNav from "../components/HomeNav";

const Topics = () => {
    const [sortAscending, setSortAscending] = useState(false);
    const {slug} = useParams();

    const capitalizedSlug = slug.charAt(0).toUpperCase() + slug.slice(1);


    return (
        <>
            <HomeNav sortAscending={sortAscending} setSortAscending={setSortAscending}/>
            <main className="component-outline">
                <h2 className="topic-title" >{`${capitalizedSlug}:`}</h2>
                <section className="component-outline">
                    <ArticleList sortAscending={sortAscending} slug={slug} />
                </section>
            </main>
        </>
    )
}

export default Topics;