import { useState } from "react";
import ArticleList from "../components/ArticleList";
import HomeNav from "../components/HomeNav";

const Home = () => {
    const [sortAscending, setSortAscending] = useState(false);
    const [sortBy, setSortBy] = useState('created_at');

    return (
        <>
        <HomeNav sortAscending={sortAscending} setSortAscending={setSortAscending} setSortBy={setSortBy} />
        <main className="component-outline">
            <ArticleList sortAscending={sortAscending} sortBy={sortBy} />
        </main>
        </>
    )
}

export default Home;