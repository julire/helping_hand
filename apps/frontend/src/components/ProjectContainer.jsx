import { Img, ProjectTitle } from 'ui';

export function ProjectContainer(props) {
  return (
    <div className="project">
      <div className="project--header">
        <Img className="project--image" src={props.projectImg} alt="" />
        <ProjectTitle className="project--title">{props.title}</ProjectTitle>
      </div>
      <p className="project--description">{props.description}</p>
    </div>
  );
}
