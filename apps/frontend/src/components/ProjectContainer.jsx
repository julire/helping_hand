import { StyledContainer, StyledImg, StyledH1 } from 'ui';
import { ButtonMailto } from './ButtonMailto';

export function ProjectContainer({
  projectImg,
  title,
  description,
  contactEmail,
}) {
  return (
    <StyledContainer variant="ProjectContainer">
      <StyledImg src={projectImg} alt="" />
      <StyledContainer variant="ProjectHeader">
        <StyledH1 variant="ProjectTitle">{title}</StyledH1>
      </StyledContainer>
      <StyledContainer variant="CardBody">
        <ButtonMailto mailto={`mailto:${contactEmail}`} />
        <p>{description}</p>
      </StyledContainer>
    </StyledContainer>
  );
}
