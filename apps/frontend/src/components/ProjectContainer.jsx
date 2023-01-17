import { StyledContainer, StyledImg, StyledH1 } from 'ui';

export function ProjectContainer({ projectImg, title, description }) {
  return (
    <StyledContainer variant="ProjectContainer">
      <StyledImg src={projectImg} alt="" />
      <StyledContainer variant="ProjectHeader">
        <StyledH1 variant="ProjectTitle">{title}</StyledH1>
      </StyledContainer>
      <StyledContainer variant="CardBody">
        <p>{description}</p>
      </StyledContainer>
    </StyledContainer>
  );
}
