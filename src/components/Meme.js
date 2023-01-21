import Form from "./Form"
import Image from "./Image";

import { useState } from "react";

const URL = 'https://api.thecatapi.com/v1/images/search'

function Meme() {
    const [imgURL, setImageURL] = useState(require(`../img/cat-crab.jpg`))

    async function fetchImage() {
        const response = await fetch(URL)
        const data = await response.json()

        setImageURL(data[0].url)
    }


    return (
        <main>
            <Form />
            <Image fetchImage={fetchImage} imgURL={imgURL}/>
        </main>
    )
}

export default Meme;