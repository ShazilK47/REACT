function Intro1(props) {
  return (
    <div className="blog-post-intro">
      <h1>Hi! I'm {props.name}</h1>
      <h2>I've become a React developer!</h2>
      <div>
        <p>
          hi I've completed the React Basics course and I'm happy to announce
          that I'm now a Junior React Developer!
        </p>
        <p className="link">Read more...</p>
      </div>
    </div>
  );
}

export default Intro1;
