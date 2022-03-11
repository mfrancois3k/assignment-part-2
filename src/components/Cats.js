import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

function Cats() {
  const API_KEY = "9f8a8911-8335-4d72-af7f-dd0aebccf004";

  const [cat, setCat] = useState({});
  const url = "https://api.thecatapi.com/v1/images/search";

  const generateImage = async () => {
    const response = await axios.get(url);
    console.log(response);
    console.log(response.data[0].url);
    setCat(response.data[0].url);
  };
  useEffect(() => {
    generateImage();
  }, []);

  return (
    <div>
      <h3>Generate a random cat</h3>
      <button onClick={() => generateImage()}>Cat Me!</button>
      <br />
      <img src={cat} />
    </div>
  );
}

export default Cats;
