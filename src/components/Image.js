function Image({ fetchImage, imgURL, memeText, setMemeText }) {
  function handleClick() {
    fetchImage();
    setMemeText({
      topLine: "",
      bottomLine: "",
    });
  }

  function handleClearText() {
    setMemeText({
      topLine: "",
      bottomLine: "",
    });

  }

  return (
    <section className="img-sec">
      <div style={{ backgroundImage: `url(${imgURL})` }} className="meme-img">
        <span className="top-line">{memeText.topLine}</span>
        <span className="bottom-line">{memeText.bottomLine}</span>
      </div>
      <button className="image-btn">Save Image</button>
      <button className="image-btn" onClick={handleClearText}>Clear Text</button>
      <button className="image-btn" onClick={handleClick}>
        Get New Image
      </button>

    </section>
  );
}

export default Image;
