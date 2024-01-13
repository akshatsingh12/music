import React, { useEffect, useState } from "react";
import { Button ,Card} from "react-bootstrap";
import Header from "./HEADER/header1";
import Footer from "./footer";

const Songs = (props) => {
  const [sa,setSa] = useState([]);
  useEffect(()=>{
     let url=props.title

    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
var requestOptions = {
    method: "get",
    headers: myHeaders,
    redirect: "follow",
    
};
console.log(url);
// fetch(url, requestOptions)
//     .then(response => response.json())
//     .then(result => setSa(result))
//     .catch(error => console.log('error', error));
//     // setSa({ })})
  return (
    <>
        <Header/>
        {/* <div className="xy z-10">
          {sa.playlists && sa.playlists.items.length > 0 ? (
            sa.playlists.items.map((sa)=>(
              <Card style={{ width: '18rem', border: "2px solid black"}}>
      <Card.Img variant="top" src={sa.images[0].url} style={{border: "3px solid black"}}/>
      <Card.Body>
        <Card.Title>{sa.name}</Card.Title>
        <Card.Text>
         {sa.description}
        </Card.Text>
        <Button variant="primary" style={{backgroundColor: "blue"}}><a target="_blank" href={sa.external_urls.spotify}>Goooooooooo</a></Button>
      </Card.Body>
    </Card>
            ))
          ):(
            <p style={{color: 'white'}}>Wait....</p>
          )}
        </div> */}
        <Footer/>
    </>
  )
})}

export default Songs;
