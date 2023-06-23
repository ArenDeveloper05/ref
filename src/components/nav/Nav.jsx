const Nav = ({ data }) => {
  return (
    <nav>
      {data &&
        data.map(({ id, title, href }) => {
          return (
            <div className="nav-item" key={id}>
              <a href={href}>{title}</a>
            </div>
          );
        })}
    </nav>
  );
};

export default Nav;
