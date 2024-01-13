import React, { useEffect, useState } from "react";
import { Button ,Card} from "react-bootstrap";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import './music.css'
import HEADER from './HEADER/header1'
import Footer from "./footer";
import { Link } from "react-router-dom";
export let p='';
const Music = () => {
  const [da, setDa] = useState([]);
  const [pa,setPa] = useState('');
  
  useEffect(()=>{
  setDa(
    {
      "categories": {
        "href": "https://api.spotify.com/v1/browse/categories?country=SG&offset=0&limit=20",
        "items": [
          {
            "href": "https://api.spotify.com/v1/browse/categories/toplists",
            "icons": [
              {
                "height": 275,
                "url": "https://t.scdn.co/media/derived/toplists_11160599e6a04ac5d6f2757f5511778f_0_0_275_275.jpg",
                "width": 275
              }
            ],
            "id": "toplists",
            "name": "Top Lists"
          },
          {
            "href": "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFEC4WFtoNRpw",
            "icons": [
              {
                "height": 274,
                "url": "https://t.scdn.co/media/derived/pop-274x274_447148649685019f5e2a03a39e78ba52_0_0_274_274.jpg",
                "width": 274
              }
            ],
            "id": "0JQ5DAqbMKFEC4WFtoNRpw",
            "name": "Pop"
          },
          {
            "href": "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFx0uLQR2okcc",
            "icons": [
              {
                "height": null,
                "url": "https://t.scdn.co/images/04da469dd7be4dab96659aa1fa9f0ac9.jpeg",
                "width": null
              }
            ],
            "id": "0JQ5DAqbMKFx0uLQR2okcc",
            "name": "At Home"
          },
          {
            "href": "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFHOzuVTgTizF",
            "icons": [
              {
                "height": 274,
                "url": "https://t.scdn.co/media/derived/edm-274x274_0ef612604200a9c14995432994455a6d_0_0_274_274.jpg",
                "width": 274
              }
            ],
            "id": "0JQ5DAqbMKFHOzuVTgTizF",
            "name": "Dance/Electronic"
          },
          {
            "href": "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFIVNxQgRNSg0",
            "icons": [
              {
                "height": null,
                "url": "https://t.scdn.co/images/b611cf5145764c64b80e91ccd5f357c8",
                "width": null
              }
            ],
            "id": "0JQ5DAqbMKFIVNxQgRNSg0",
            "name": "Decades"
          },
          {
            "href": "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFQ00XGBls6ym",
            "icons": [
              {
                "height": 274,
                "url": "https://t.scdn.co/media/original/hip-274_0a661854d61e29eace5fe63f73495e68_274x274.jpg",
                "width": 274
              }
            ],
            "id": "0JQ5DAqbMKFQ00XGBls6ym",
            "name": "Hip-Hop"
          },
          {
            "href": "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFGvOw3O4nLAf",
            "icons": [
              {
                "height": null,
                "url": "https://t.scdn.co/images/2078afd91e4d431eb19efc5bee5ab131.jpeg",
                "width": null
              }
            ],
            "id": "0JQ5DAqbMKFGvOw3O4nLAf",
            "name": "K-Pop"
          },
          {
            "href": "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFOOxftoKZxod",
            "icons": [
              {
                "height": null,
                "url": "https://t.scdn.co/images/c6677aa51acf4121b66b9d1f231bd427.png",
                "width": null
              }
            ],
            "id": "0JQ5DAqbMKFOOxftoKZxod",
            "name": "RADAR"
          },
          {
            "href": "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFLb2EqgLtpjC",
            "icons": [
              {
                "height": null,
                "url": "https://t.scdn.co/images/3710b68657574bc79df14bd74629e5ac",
                "width": null
              }
            ],
            "id": "0JQ5DAqbMKFLb2EqgLtpjC",
            "name": "Wellness"
          },
          {
            "href": "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFImHYGo3eTSg",
            "icons": [
              {
                "height": null,
                "url": "https://t.scdn.co/images/16e40e64d2a74fa8a0a020d456e6541d.jpeg",
                "width": null
              }
            ],
            "id": "0JQ5DAqbMKFImHYGo3eTSg",
            "name": "Fresh Finds"
          },
          {
            "href": "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFC8BnkNHqcZw",
            "icons": [
              {
                "height": null,
                "url": "https://t.scdn.co/images/fd2cdde10ea04ccfb10c902274be8815.jpeg",
                "width": null
              }
            ],
            "id": "0JQ5DAqbMKFC8BnkNHqcZw",
            "name": "Mandopop"
          },
          {
            "href": "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFPw634sFwguI",
            "icons": [
              {
                "height": null,
                "url": "https://t.scdn.co/images/084155aeaa724ea1bd393a017d67b709",
                "width": null
              }
            ],
            "id": "0JQ5DAqbMKFPw634sFwguI",
            "name": "EQUAL"
          },
          {
            "href": "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFDXXwE9BDJAr",
            "icons": [
              {
                "height": 274,
                "url": "https://t.scdn.co/media/derived/rock_9ce79e0a4ef901bbd10494f5b855d3cc_0_0_274_274.jpg",
                "width": 274
              }
            ],
            "id": "0JQ5DAqbMKFDXXwE9BDJAr",
            "name": "Rock"
          },
          {
            "href": "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFFzDl7qN9Apr",
            "icons": [
              {
                "height": 274,
                "url": "https://t.scdn.co/media/derived/chill-274x274_4c46374f007813dd10b37e8d8fd35b4b_0_0_274_274.jpg",
                "width": 274
              }
            ],
            "id": "0JQ5DAqbMKFFzDl7qN9Apr",
            "name": "Chill"
          },
          {
            "href": "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFy0OenPG51Av",
            "icons": [
              {
                "height": 274,
                "url": "https://t.scdn.co/media/derived/icon-274x274_5ce6e0f681f0a76f9dcf9270dfd18489_0_0_274_274.jpg",
                "width": 274
              }
            ],
            "id": "0JQ5DAqbMKFy0OenPG51Av",
            "name": "Christian & Gospel"
          },
          {
            "href": "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFzHmL4tf05da",
            "icons": [
              {
                "height": 274,
                "url": "https://t.scdn.co/media/original/mood-274x274_976986a31ac8c49794cbdc7246fd5ad7_274x274.jpg",
                "width": 274
              }
            ],
            "id": "0JQ5DAqbMKFzHmL4tf05da",
            "name": "Mood"
          },
          {
            "href": "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFCWjUTdzaG0e",
            "icons": [
              {
                "height": null,
                "url": "https://t.scdn.co/images/fe06caf056474bc58862591cd60b57fc.jpeg",
                "width": null
              }
            ],
            "id": "0JQ5DAqbMKFCWjUTdzaG0e",
            "name": "Indie"
          },
          {
            "href": "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFEZPnFQSFB1T",
            "icons": [
              {
                "height": 274,
                "url": "https://t.scdn.co/media/derived/r-b-274x274_fd56efa72f4f63764b011b68121581d8_0_0_274_274.jpg",
                "width": 274
              }
            ],
            "id": "0JQ5DAqbMKFEZPnFQSFB1T",
            "name": "R&B"
          },
          {
            "href": "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFAXlCG6QvYQ4",
            "icons": [
              {
                "height": null,
                "url": "https://t.scdn.co/media/links/workout-274x274.jpg",
                "width": null
              }
            ],
            "id": "0JQ5DAqbMKFAXlCG6QvYQ4",
            "name": "Workout"
          },
          {
            "href": "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFCbimwdOYlsl",
            "icons": [
              {
                "height": 274,
                "url": "https://t.scdn.co/media/original/genre-images-square-274x274_5e50d72b846a198fcd2ca9b3aef5f0c8_274x274.jpg",
                "width": 274
              }
            ],
            "id": "0JQ5DAqbMKFCbimwdOYlsl",
            "name": "Focus"
          }
        ],
        "limit": 20,
        "next": "https://api.spotify.com/v1/browse/categories?country=SG&offset=20&limit=20",
        "offset": 0,
        "previous": null,
        "total": 47
      }
    }
  )
},[])
function fun(pq) {
  setPa(pq)
}
// alert(da.href)
// console.log('gfs' +da);
//     var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");
// var requestOptions = {
//     method: "get",
//     headers: myHeaders,
//     redirect: "follow",
    
// };

// fetch("https://v1.nocodeapi.com/hjvuvtf/spotify/SUQmCOHICqhjjCRu/browse/categories", requestOptions)
//     .then(response => response.json())
//     .then(result => setDa(result))
//     .catch(error => console.log('error', error));
// console.log(da);
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
        <Button variant="primary"  style={{backgroundColor: "blue"}}><Link to={'/music/songs'} onClick={()=>{
          let pq = da.href;
          fun();
          alert(pa);
        }} >Goo</Link></Button>
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
// export const p=pa;
export default Music;
