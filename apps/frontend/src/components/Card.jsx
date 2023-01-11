import { StyledContainer, StyledH1, StyledH2 } from 'ui';

export function Card(props) {
  return (
    <StyledContainer variant="CardContainer">
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
