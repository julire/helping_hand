import { StyledContainer, StyledH1, StyledH2 } from 'ui';
import { Link } from 'react-router-dom';

export function Card({ imageUrl, projectName, description }) {
  return (
    <StyledContainer variant="CardContainer">
      {console.log(projectName)}

      <img src={imageUrl} alt="" />
      <div>
        <StyledContainer variant="CardHeader">
          <StyledH2>{projectName}</StyledH2>
        </StyledContainer>
        <StyledContainer variant="CardBody">{description}</StyledContainer>
      </div>
    </StyledContainer>
  );
}
