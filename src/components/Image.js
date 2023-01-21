function Image ({fetchImage, imgURL}) {


    return (
        <section className="img-sec">
            <div style={{backgroundImage: `url(${imgURL})`}} className="meme-img" ></div>
                  <button className="image-btn" onClick={fetchImage}>Get New Image</button>
        </section>
    )
}

export default Image;