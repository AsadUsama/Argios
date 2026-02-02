import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/contact.jsx';
import Projects from './pages/projects.jsx';
import News from './pages/News.jsx';
import Shop from '../src/pages/Shop.jsx';
import Services from './pages/Services.jsx';
import ScrollToTop from './utils/scrollToTop.jsx';

function App() {


  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/news' element={<News />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App


