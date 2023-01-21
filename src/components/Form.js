function Form() {
  return (
    <form className="meme-form">
    <div className="form-inputs">
      <label htmlFor="top-line" className="visually-hidden">
        Top Line of Meme Text{" "}
      </label>
      <input type="text" name="top-line" placeholder="Top Line of Meme Text" id="top-line"/>

      <label htmlFor="bottom-line" className="visually-hidden">Bottom line of Meme Text </label>
      <input
        type="text"
        name="bottom-line"
        id="bottom-line"
        placeholder="Bottom Line of Meme Text"
      />
    </div>
      <button className="meme-btn">Make Your Meme</button>
    </form>
  );
}

export default Form;
