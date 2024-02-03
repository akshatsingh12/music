import React, { useEffect, useState } from 'react';
import Footer from './footer';
import { Button, Card } from "react-bootstrap";
import Header from './HEADER/header1';
import InfiniteScroll from 'react-infinite-scroll-component';

const NewRelease2 = () => {
  const [aa, setAa] = useState([]);
  const [page, setPage] = useState(1); // Initial page number
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async () => {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var requestOptions = {
          method: "get",
          headers: myHeaders,
          redirect: "follow",
          
      };
      const response = await fetch(`https://v1.nocodeapi.com/hjvuvtfree/spotify/aXMJElbXumcpppBI/browse/new?perPage=${page}`,requestOptions);
      const result = await response.json();
      setAa((prevData) => ({
        aa:
         [...prevData.aa, ...result.aa]
      }));
      setPage(page + 1);
      if (aa.result.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Initial data fetch

  return (
    <>
      <Header />
      <InfiniteScroll
        dataLength={aa.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<p>Loading...</p>}
        // endMessage={<p>No more items</p>}
      >
        <div className="xy z-10" style={{ color: 'black' }}>
          {aa.albums && aa.albums.items.length > 0 ? (
            aa.albums.items.map((aa) => (
              <Card key={aa.id} style={{ width: '18rem', border: "2px solid black" }}>
                <Card.Img variant="top" src={aa.images[0].url} style={{ border: "3px solid black" }} />
                <Card.Body>
                  <Card.Title>{aa.name}</Card.Title>
                  <Card.Text></Card.Text>
                  <Button variant="primary" style={{ backgroundColor: "blue" }}><a target="_blank" href={aa.artists[0].external_urls.spotify}>Go</a></Button>
                </Card.Body>
              </Card>
            ))
          ) : (
            <p style={{ color: 'black' }}>Wait....</p>
          )}
        </div>
      </InfiniteScroll>
      <Footer />
    </>
  );
};

export default NewRelease2;
