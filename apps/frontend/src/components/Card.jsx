import { CardWrapper, CardHeader, CardHeading, CardBody } from 'ui';

export function Card(props) {
  return (
    <CardWrapper>
      <img src={props.projectImg} alt="" />
      <div>
        <CardHeader>
          <CardHeading>{props.title}</CardHeading>
        </CardHeader>
        <CardBody>{props.description}</CardBody>
      </div>
    </CardWrapper>
  );
}
