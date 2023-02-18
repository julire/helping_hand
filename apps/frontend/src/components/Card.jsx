import { StyledContainer, StyledH1, StyledH2, StyledImg, StyledLink } from 'ui';
import { Link } from 'react-router-dom';

export function Card({ id, imageUrl, projectName, description }) {
  return (
    <StyledContainer variant="CardContainer">
      <StyledLink to={`projects/${id}`}>
        <StyledImg variant="CardImage" src={imageUrl} alt="" />
        <div>
          <StyledContainer variant="CardHeader">
            <StyledH2>{projectName}</StyledH2>
          </StyledContainer>
          <StyledContainer variant="CardBody">{description}</StyledContainer>
        </div>
      </StyledLink>
    </StyledContainer>
  );
}
