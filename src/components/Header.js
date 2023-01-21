function Header() {
  return (
    <header>
      <div className="header-title">
        <img
          src={require(`../img/cat.png`)}
          alt="cat icon"
          className="sassy-icon"
        />
        <h1 className="sassy-title">Sassy Cats!</h1>
      </div>
      <h3 className="subheading">Memes for Disapproving Cats</h3>
    </header>
  );
}

export default Header;