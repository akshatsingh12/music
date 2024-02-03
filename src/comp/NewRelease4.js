import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Button, Card } from 'react-bootstrap';
import Header from './HEADER/header1';
import Footer from './footer';

const NewRelease4 = () => {
  const [aa, setAa] = useState([]);
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [uniqueIds, setUniqueIds] = useState(new Set());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://v1.nocodeapi.com/vgjtxrx/spotify/TwIiAvDTwaLSusYC/browse/new?country=in&perPage=45&page=1`
        );
        const result = await response.json();
        setAa(result);

        const newItems = result.albums.items.filter((item) => !uniqueIds.has(item.id));
        setItems([...items, ...newItems]);
        setUniqueIds(new Set([...uniqueIds, ...newItems.map((item) => item.id)]));
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchMoreData = async () => {
    try {
      const response = await fetch(
        `https://v1.nocodeapi.com/vgjtxrx/spotify/TwIiAvDTwaLSusYC/browse/new?country=in&perPage=45&page=${Math.ceil(
          items.length / 45 + 1
        )}`
      );
      const result = await response.json();

      if (result.albums.items.length === 0) {
        setHasMore(false);
        return;
      }

      const newItems = result.albums.items.filter((item) => !uniqueIds.has(item.id));
      setItems([...items, ...newItems]);
      setUniqueIds(new Set([...uniqueIds, ...newItems.map((item) => item.id)]));
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <>
      <div>
        <Header />
        <InfiniteScroll
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="xy z-10" style={{ color: 'black' }}>
            {items.length > 0 ? (
              items.map((album) => (
                <Card key={album.id} style={{ width: '18rem', border: '2px solid black' }}>
                  <Card.Img variant="top" src={album.images[0].url} style={{ border: '3px solid black' }} />
                  <Card.Body>
                    <Card.Title>{album.name}</Card.Title>
                    <Card.Text></Card.Text>
                    <Button variant="primary" style={{ backgroundColor: 'blue' }}>
                      <a target="_blank" href={album.artists[0].external_urls.spotify}>
                        Goooooooooo
                      </a>
                    </Button>
                  </Card.Body>
                </Card>
              ))
            ) : (
              <p style={{ color: 'black' }}>Wait....</p>
            )}
          </div>
        </InfiniteScroll>
        <Footer />
      </div>
    </>
  );
};

export default NewRelease4;
