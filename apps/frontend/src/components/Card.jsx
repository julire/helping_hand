import { StyledContainer, StyledH1, StyledH2 } from 'ui';
import { Link, useParams } from 'react-router-dom';

export function Card({ projectImg, title, description }) {
  const { id } = useParams();
  return (
    <a href="/project/{id}">
      <StyledContainer variant="CardContainer">
        <img src={projectImg} alt="" />
        <div>
          <StyledContainer variant="CardHeader">
            <StyledH2>{title}</StyledH2>
          </StyledContainer>
          <StyledContainer variant="CardBody">{description}</StyledContainer>
        </div>
      </StyledContainer>
    </a>
  );
}
