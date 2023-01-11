export function ProjectHeader(props) {
  return (
    <div className="project">
      <div className="project--header">
        <img className="project--image" src={props.projectImg} alt="" />
        <div className="project--title">{props.title}</div>
      </div>
      <p className="project--description">{props.description}</p>
    </div>
  );
}
