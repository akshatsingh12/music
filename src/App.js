import './App.css';
// import Api  from './comp/news';
import Home from './comp/home';
import Music, {p} from './comp/music';
import Songs from './comp/songs';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
// import { p } from './comp/music';
// alert(p)
function App() {
  return (
    <>
      <div style={{backgroundColor: "black"}}>
      <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/music" element={<Music/>} />
        <Route path="/music/songs" element={<Songs title={p}/>}/>
      </Routes>
      {/* <div style={{backgroundColor: "rgb(168, 142, 73)"}}>
      <Header/>
      <Api/>
      <Footer/>
      </div> */}
    </Router>
      {/* <Ani/> */}
      </div>
    </>
  );
}

export default App;


