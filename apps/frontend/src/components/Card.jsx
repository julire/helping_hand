import { StyledContainer, CardHeader, CardHeading, CardBody } from 'ui';

export function Card(props) {
  return (
    <StyledContainer variant="CardContainer">
      <img src={props.projectImg} alt="" />
      <div>
        <CardHeader>
          <CardHeading>{props.title}</CardHeading>
        </CardHeader>
        <CardBody>{props.description}</CardBody>
      </div>
    </StyledContainer>
  );
}
