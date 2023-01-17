import { StyledContainer, StyledH1, StyledH2 } from 'ui';
import { Link } from 'react-router-dom';

export function Card({ id, imageUrl, projectName, description }) {
  return (
    <StyledContainer variant="CardContainer">
      <Link to={`projects/${id}`}>
        <img src={imageUrl} alt="" />
        <div>
          <StyledContainer variant="CardHeader">
            <StyledH2>{projectName}</StyledH2>
          </StyledContainer>
          <StyledContainer variant="CardBody">{description}</StyledContainer>
        </div>
      </Link>
    </StyledContainer>
  );
}
