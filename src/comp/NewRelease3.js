import React, { useState, useEffect, CSSProperties } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Footer from "./footer";
import { Button, Card } from "react-bootstrap";
// import ClipLoader from "react-spinners/ClipLoader";
import Header from "./HEADER/header1";
import Spinner from "./Spinner";

const NewRelease3 = () => {
  const [items, setItems] = useState([]);
  const [aa, setAa] = useState([]);
  const [ne, setNe] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [uniqueIds, setUniqueIds] = useState(new Set());
  let [loading, setLoading] = useState(true);
  // let [color, setColor] = useState("#ffffff");

  const [i, setI] = useState(1);
  const fetchData = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "get",
      headers: myHeaders,
      redirect: "follow",
    };

    const response = await fetch(
      `https://v1.nocodeapi.com/vgjtxrx/spotify/TwIiAvDTwaLSusYC/browse/new?country=in&perPage=4&page=${i}`,
      requestOptions
    );
    const result = await response.json();
    setAa(result.albums.items);
    // .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    fetchData();
  }, []);

  const fetchMoreData = async () => {
    // if (aa.albums.items.length >= 45) {
    //   // this.setState({ hasMore: false });
    //   setHasMore(false);
    //   return;
    // }
    setI(i + 1);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "get",
      headers: myHeaders,
      redirect: "follow",
    };
    const response = await fetch(
      `https://v1.nocodeapi.com/vgjtxrx/spotify/TwIiAvDTwaLSusYC/browse/new?country=in&perPage=4&page=${i}`,
      requestOptions
    );
    const result = await response.json();
    //  setNe(result.albums.items)
    const newItems = result.albums.items.filter(
      (item) => !uniqueIds.has(item.id)
    );
    setNe([...items, ...newItems]);
    setUniqueIds(new Set([...uniqueIds, ...newItems.map((item) => item.id)]));
    up();
    //  console.log(i);
  };
  console.log(aa);
  const up = () => {
    setAa((PreAa) => [...PreAa, ...ne]);
  };
  return (
    <>
      <div >
        <Header />
        <InfiniteScroll
          dataLength={aa.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<Spinner />}
        >
          {/* <button onClick={fetchMoreData}>Click</button> */}
          <div
            className="xy z-10"
            style={{ color: "black", boxSizing: "none" }}
          >
            {/* {aa.albums && aa.albums.items.length > 0 ? ( */}
            {aa.map((aa) => (
              <Card style={{ width: "18rem", border: "2px solid black" }}>
                <Card.Img
                  variant="top"
                  src={aa.images[0].url}
                  style={{ border: "3px solid black" }}
                />
                <Card.Body>
                  <Card.Title>{aa.name}</Card.Title>
                  <Card.Text></Card.Text>
                  <Button variant="primary" style={{ backgroundColor: "blue" }}>
                    <a
                      target="_blank"
                      href={aa.artists[0].external_urls.spotify}
                    >
                      Goooooooooo
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            ))}
            {/* : (
              <p style={{ color: "black" }}>Wait....</p>
            ) */}
          </div>
        </InfiniteScroll>
        <Footer />
      </div>
    </>
  );
};

export default NewRelease3;
