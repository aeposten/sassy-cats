function Form({ handleChange, memeText }) {
  return (
    <section className="meme-form">
        <label htmlFor="top-line" className="visually-hidden">
          Top Line of Meme Text{" "}
        </label>
        <input
          type="text"
          name="topLine"
          placeholder="Top Line of Meme Text"
          id="top-line"
          value={memeText.topLine}
          onChange={handleChange}
        />

        <label htmlFor="bottom-line" className="visually-hidden">
          Bottom line of Meme Text{" "}
        </label>
        <input
          type="text"
          name="bottomLine"
          id="bottom-line"
          placeholder="Bottom Line of Meme Text"
          value={memeText.bottomLine}
          onChange={handleChange}
        />
    </section>
  );
}

export default Form;
