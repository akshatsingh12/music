import React, { useEffect, useState } from 'react'
import Footer from './footer';
import { Button ,Card} from "react-bootstrap";
import Header from './HEADER/header1';

const NewRelease = () => {
    const [aa,setAa] = useState([]);
    useEffect(()=>{
        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
var requestOptions = {
    method: "get",
    headers: myHeaders,
    redirect: "follow",
    
};

fetch("https://v1.nocodeapi.com/bchbebd/spotify/ucEqkvLwySFvnehk/browse/new", requestOptions)
    .then(response => response.json())
    .then(result => setAa(result))
    .catch(error => console.log('error', error));
    },[])
    // console.log(aa.albums.items.artists.external_urls.id);
  return (
    <>
    <Header/>
      <div className="xy z-10" style={{color: 'black'}}>
          {aa.albums && aa.albums.items.length > 0 ? (
            aa.albums.items.map((aa)=>(
              <Card style={{ width: '18rem', border: "2px solid black"}}>
      {/* <Card.Img variant="top" href={aa.artists} style={{border: "3px solid black"}}/> */}
      <Card.Body>
        <Card.Title>{aa.artists.name}</Card.Title>
        <Card.Text>
         {/* {aa.artists[0].id} */}
        </Card.Text>
        <Button variant="primary" style={{backgroundColor: "blue"}}><a target="_blank" href={aa.artists[0].external_urls.spotify}>Goooooooooo</a></Button>
      </Card.Body>
    </Card>
            ))
          ):(
            <p style={{color: 'black'}}>Wait....</p>
          )}
        </div>
        <Footer/>
    </>
  )
}

export default NewRelease
