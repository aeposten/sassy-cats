function Image({ meme, handleClick, handleClearText }) {
  return (
    <section className="img-sec" id="img-sec">
      <div
        style={{ backgroundImage: `url(${meme.imgURL})` }}
        className="meme-img"
        id="meme-img"
      >
        <span className="top-line">{meme.topLine}</span>
        <span className="bottom-line">{meme.bottomLine}</span>
      </div>
      <button className="image-btn" onClick={handleClearText}>
        Clear Text
      </button>
      <button className="image-btn" onClick={handleClick}>
        Get New Image
      </button>
    </section>
  );
}

export default Image;
