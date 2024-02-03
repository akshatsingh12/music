import React from 'react'
import { ClipLoader } from 'react-spinners'
import { useState, CSSProperties } from "react";

const Spinner = () => {
    const override: CSSProperties = {
      display: "block",
      margin: "0 auto",
      borderColor: "red",
      position:'absolute'
    };
    let [loading, setLoading] = useState(true);
//   let [color, setColor] = useState("#ffffff");
  return (
    <div style={{height:'2rem',position:'relative'}}>
      <ClipLoader
        color='green'
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Spinner
