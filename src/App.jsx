import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Article from './pages/Article';
import Authentication from './pages/Authentication';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:article_id" element={<Article />} />
        <Route path='/auth' element={<Authentication />} />
      </Routes>
    </>
  )
}

export default App
