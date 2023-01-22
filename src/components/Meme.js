import Form from "./Form";
import Image from "./Image";

import { useState } from "react";

const URL = "https://api.thecatapi.com/v1/images/search";

function Meme() {
  const [imgURL, setImageURL] = useState(require(`../img/cat-crab.jpg`));
  const [memeText, setMemeText] = useState({
    topLine: "",
    bottomLine: "",
  });

  async function fetchImage() {
    const response = await fetch(URL);
    const data = await response.json();

    setImageURL(data[0].url);
  }

  function handleChange(e) {
    setMemeText({
      ...memeText,
      [e.target.name]: e.target.value,
    }
    );

  }

  return (
    <main>
      <Form handleChange={handleChange} memeText={memeText}/>
      <Image fetchImage={fetchImage} imgURL={imgURL} memeText={memeText} setMemeText={setMemeText}/>
    </main>
  );
}

export default Meme;
