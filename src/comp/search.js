import React, { useEffect, useState } from 'react'
import { Button ,Card} from "react-bootstrap";
import { useParams } from 'react-router-dom'
import Header from './HEADER/header1';
import Footer from './footer';
const Ser = () => {
    const {i} =useParams();
    const [pa , setPa] = useState([]);
    // const [p , setP] = useState(i);
    // setP(i)

    useEffect(()=>{
      var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
var requestOptions = {
    method: "get",
    headers: myHeaders,
    redirect: "follow",
    
};

fetch(`https://v1.nocodeapi.com/bchbebd/spotify/ucEqkvLwySFvnehk/search?q=${i}`, requestOptions)
    .then(response => response.json())
    .then(result => setPa(result))
    .catch(error => console.log('error', error));
    },[i])
  return (
    <>
    <Header/>
      <div className="xy z-10">
      {pa.albums && pa.albums.items.length > 0 ? (
        pa.albums.items.map((pa) => (
    <Card style={{ width: '18rem', border: "2px solid black"}}>
      <Card.Img variant="top" src={pa.images[0].url} style={{border: "3px solid black"}}/>
      <Card.Body>
        <Card.Title>{pa.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary"  style={{backgroundColor: "blue"}}><a target='_blank' href={pa.artists[0].external_urls.spotify}>Goo</a></Button>
      </Card.Body>
    </Card>
        ))
      ) : (
        <p>Wait....</p>
      )}
      </div>
    <Footer/>
    </>
  )
}

export default Ser
