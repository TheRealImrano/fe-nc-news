import ArticleList from "../components/ArticleList";
import HomeNav from "../components/HomeNav";

const Home = () => {
    return (
        <>
        <HomeNav />
        <main className="component-outline">
            <ArticleList />
        </main>
        </>
    )
}

export default Home;