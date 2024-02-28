const Links = ({ linksList=[] }) => {
  return (
    <div className="links">
      {linksList.map((item) => (
        <a href={`#${item}`} key={item}>
          {item}
        </a>
      ))}
    </div>
  );
};

export default Links;
