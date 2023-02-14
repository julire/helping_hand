import { StyledContainer, StyledH2 } from '../index';

export function Card(props) {
  return (
    <StyledContainer bg={props.primary} variant="CardContainer">
      <img src={props.projectImg} alt="" />
      <div>
        <StyledContainer variant="CardHeader">
          <StyledH2>{props.title}</StyledH2>
        </StyledContainer>
        <StyledContainer variant="CardBody">
          {props.description}
        </StyledContainer>
      </div>
    </StyledContainer>
  );
}
