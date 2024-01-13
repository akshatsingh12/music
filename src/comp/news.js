import React, { useState, useEffect } from "react";
import {Button,Card} from "react-bootstrap";
const Api = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=fef906d2e8d8458aba311a9f6c0a6de4"
    )
      .then((res) => res.json())
      .then((data) => setInfo(data.articles));
     
  }, []);
  // console.log(info);
  return (
    <>
      {info && info.length > 0 ? (
        info.map((info) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={info.urlToImage} />
            <Card.Body>
              <Card.Title>{info.title}</Card.Title>
              <Card.Text>
                {info.description}
              </Card.Text>
              <Button variant="primary"><a href={info.url} id="abc">GO THERE</a></Button>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>Wait....</p>
      )}
    </>
  );
};
export let a=6;
export default Api;
