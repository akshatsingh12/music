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

fetch("https://v1.nocodeapi.com/hjvuvtfree/spotify/aXMJElbXumcpppBI/browse/new?perPage=45&page=1", requestOptions)
    .then(response => response.json())
    .then(result => setAa(result))
    .catch(error => console.log('error', error));
    },[])
  return (
    <>
    <Header/>
      <div className="xy z-10" style={{color: 'black'}}>
          {aa.albums && aa.albums.items.length > 0 ? (
            aa.albums.items.map((aa)=>(
              <Card style={{ width: '18rem', border: "2px solid black"}}>
      <Card.Img variant="top" src={aa.images[0].url} style={{border: "3px solid black"}}/>
      <Card.Body>
        <Card.Title>{aa.name}</Card.Title>
        <Card.Text>
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
