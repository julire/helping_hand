import { CardBody, CardHeader, CardHeading, CardWrapper } from "ui";

export function Card({ projectImg, title, description }) {
  return (
    <CardWrapper>
      <img src={projectImg} alt="" />
      <div>
        <CardHeader>
          <CardHeading>{title}</CardHeading>
        </CardHeader>
        <CardBody>{description}</CardBody>
      </div>
    </CardWrapper>
  );
}
