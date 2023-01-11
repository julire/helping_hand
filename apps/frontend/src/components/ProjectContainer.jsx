import { ProjectHeader, ProjectImg, ProjectTitle } from 'ui';

export function ProjectContainer(props) {
  return (
    <div className="project">
      <ProjectHeader className="project--header">
        <ProjectImg className="project--image" src={props.projectImg} alt="" />
        <ProjectTitle className="project--title">{props.title}</ProjectTitle>
      </ProjectHeader>
      <p className="project--description">{props.description}</p>
    </div>
  );
}
