import { StyledContainer, StyledH1, StyledH2 } from 'ui';
import { Link } from 'react-router-dom';

export function Card({ projectImg, title, description }) {
  return (
    <StyledContainer variant="CardContainer">
      <img src={projectImg} alt="" />
      <div>
        <StyledContainer variant="CardHeader">
          <StyledH2>{title}</StyledH2>
        </StyledContainer>
        <StyledContainer variant="CardBody">{description}</StyledContainer>
      </div>
    </StyledContainer>
  );
}
