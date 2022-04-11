function Songs(props) {
  return (
    <div className="song">
      <p className="song--author">{props.author}</p>
      <p className="song--separator">&nbsp;—&nbsp;</p>
      <p className="song--title">{props.title}</p>
    </div>
  );
}

export default Songs;
