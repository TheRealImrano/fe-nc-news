import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Article from './pages/Article';
import Authentication from './pages/Authentication';
import Topics from './pages/Topics';
import NotFound from './pages/NotFound';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:article_id" element={<Article />} />
        <Route path='/auth' element={<Authentication />} />
        <Route path='/topics/:slug' element={<Topics />} />
        <Route path="*" element={<NotFound />} /> {/* 404 page */}
      </Routes>
    </>
  )
}

export default App
