import { useState } from "react";
import ArticleList from "../components/ArticleList";
import HomeNav from "../components/HomeNav";

const Home = () => {
    const [sortAscending, setSortAscending] = useState(false);

    return (
        <>
        <HomeNav sortAscending={sortAscending} setSortAscending={setSortAscending}/>
        <main className="component-outline">
            <ArticleList sortAscending={sortAscending}/>
        </main>
        </>
    )
}

export default Home;