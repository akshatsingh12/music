import React, { useEffect, useState } from "react";
import LoadingBar from 'top-loading-bar/dist'

import { Button ,Card} from "react-bootstrap";
import Header from "./HEADER/header1";
import Footer from "./footer";
import { useParams } from "react-router-dom";
const Songs = () => {
  const [progress, setProgress] = useState(0)
    const {id} = useParams();
    const [sa , setSa] = useState([]);
    useEffect(()=>{
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var requestOptions = {
        method: "get",
        headers: myHeaders,
        redirect: "follow",
      };setProgress(progress + 20)
      fetch(`https://v1.nocodeapi.com/bchbebd/spotify/ucEqkvLwySFvnehk/browse/categoryPlaylist?category_id=${id}`,requestOptions)
      .then(response => response.json() ).then(setProgress(50))
      .then(result => setSa(result))
      .then(setProgress(100))
      .catch(error => console.log('error', error))
    },[])
      return (
    <>
        <Header/>
        <LoadingBar
        color='lightgreen'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
        <div className="xy z-10">
          {sa.playlists && sa.playlists.items.length > 0 ? (
            sa.playlists.items.map((sa)=>(
              <Card style={{ width: '18rem', border: "2px solid black"}}>
      <Card.Img variant="top" src={sa.images[0].url} style={{border: "3px solid black"}}/>
      <Card.Body>
        <Card.Title>{sa.name}</Card.Title>
        <Card.Text>
         {sa.description}
        </Card.Text>
        <Button variant="primary" style={{backgroundColor: "blue"}}><a target="_blank" rel="noreferrer" href={sa.external_urls.spotify}>Goooooooooo</a></Button>
      </Card.Body>
    </Card>
            ))
          ):(
            <p style={{color: 'white'}}>Wait....</p>
          )}
        </div>
        <Footer/>
    </>
  )
}

export default Songs;
