import Form from "./Form";
import Image from "./Image";

import { useState } from "react";
const URL = "https://api.thecatapi.com/v1/images/search";

function Meme() {
  const [meme, setMeme] = useState({
    topLine: "",
    bottomLine: "",
    imgURL: require(`../img/cat-crab.jpg`),
  });

  async function fetchImage() {
    const response = await fetch(URL);
    const data = await response.json();

    setMeme((prevState) => {
      return {
        ...prevState,
        imgURL: data[0].url,
      };
    });
  }

  function handleChange(e) {
    setMeme({
      ...meme,
      [e.target.name]: e.target.value,
    });
  }

  function handleClick() {
    fetchImage();
    handleClearText();
  }

  function handleClearText() {
    setMeme((prevState) => {
      return {
        ...prevState,
        topLine: "",
        bottomLine: "",
      };
    });
  }

  return (
    <main>
      <Form handleChange={handleChange} meme={meme} />
      <Image
        meme={meme}
        handleClick={handleClick}
        handleClearText={handleClearText}
      />
    </main>
  );
}

export default Meme;
