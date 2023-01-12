import { StyledContainer, ProjectHeader, ProjectImg, ProjectTitle } from 'ui';

export function ProjectContainer(props) {
  return (
    <StyledContainer variant="ProjectContainer">
      <ProjectHeader className="project--header">
        <ProjectImg className="project--image" src={props.projectImg} alt="" />
        <ProjectTitle className="project--title">{props.title}</ProjectTitle>
      </ProjectHeader>
      <StyledContainer variant="CardBody">
        <p className="project--description">{props.description}</p>
      </StyledContainer>
    </StyledContainer>
  );
}
