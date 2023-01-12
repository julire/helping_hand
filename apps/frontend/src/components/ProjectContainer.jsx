import { StyledContainer, ProjectHeader, ProjectImg, ProjectTitle } from 'ui';

export function ProjectContainer({ projectImg, title, description }) {
  return (
    <StyledContainer variant="ProjectContainer">
      <ProjectHeader>
        <ProjectImg src={projectImg} alt="" />
        <ProjectTitle>{title}</ProjectTitle>
      </ProjectHeader>
      <StyledContainer variant="CardBody">
        <p className="project--description">{description}</p>
      </StyledContainer>
    </StyledContainer>
  );
}
