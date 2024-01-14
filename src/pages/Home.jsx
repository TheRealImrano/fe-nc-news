import { useState } from "react";
import ArticleList from "../components/ArticleList";
import HomeNav from "../components/HomeNav";
import HttpError from "./HttpError";

const Home = () => {
    const [sortAscending, setSortAscending] = useState(false);
    const [sortBy, setSortBy] = useState('created_at');
    const [errorRes, setErrorRes] = useState({});

    if (errorRes.code && errorRes.msg){
        return <HttpError res={errorRes} />
    }

    return (
        <>
        <HomeNav sortAscending={sortAscending} setSortAscending={setSortAscending} setSortBy={setSortBy} />
        <main className="component-outline">
            <ArticleList sortAscending={sortAscending} sortBy={sortBy} setErrorRes={setErrorRes} />
        </main>
        </>
    )
}

export default Home;