import './App.css';
import Search  from './comp/search';
import Home from './comp/home';
import Music from './comp/music';
import Songs from './comp/songs';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import NewRelease from './comp/NewRelease';
// import { p } from './comp/music';
// alert(p)
function App() {
  return (
    <>
      <div>
      <Router>
      <Routes>
        <Route path="/music" element={<Home/>}/>
        <Route path="/categories" element={<Music/>} />
        <Route path="/newreleases" element={<NewRelease/>} />
        <Route path="/categories/:id"  element={<Songs/>}/>
        <Route path="/:i"  element={<Search/>}/>
      </Routes>
    </Router>
      </div>
    </>
  );
}

export default App;


