const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar__logo">Dojo Blog</h1>
      <div className="navbar__links">
        <a href="/" style={{
          color: "green"
        }}>Home</a>
        <a href="/create">New Blog</a>
      </div>
    </nav>
  );
}

export default Navbar;