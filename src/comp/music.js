import React, { useEffect, useState } from "react";
import { Button ,Card} from "react-bootstrap";
// import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import './music.css'
import HEADER from './HEADER/header1'
import Footer from "./footer";
import { Link } from "react-router-dom";
export let p='';
const Music = () => {
  const [da, setDa] = useState([]);
  // const [pa,setPa] = useState('');
  
  useEffect(()=>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
        method: "get",
        headers: myHeaders,
        redirect: "follow",
        
    };
    
    fetch("https://v1.nocodeapi.com/bchbebd/spotify/ucEqkvLwySFvnehk/browse/categories", requestOptions)
        .then(response => response.json())
        .then(result => setDa(result))
        .catch(error => console.log('error', error));
},[])
  return (
    <>
   <HEADER/>
    <div className="xy z-10">
      {da.categories && da.categories.items.length > 0 ? (
        da.categories.items.map((da) => (
    <Card style={{ width: '18rem', border: "2px solid black"}}>
      <Card.Img variant="top" src={da.icons[0].url} style={{border: "3px solid black"}}/>
      <Card.Body>
        <Card.Title>{da.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" style={{backgroundColor: "blue"}}><Link to={`/categories/${da.id}`}>Goo</Link></Button>
      </Card.Body>
    </Card>
        ))
      ) : (
        <p>Wait....</p>
      )}
    </div>
      <Footer/>
    </>
  );
};
export default Music;
