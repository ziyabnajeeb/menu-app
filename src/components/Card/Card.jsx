import 'twin.macro';
import {
  CardWrapper,
  CardBody,
  CardContent,
  CardContentText,
  CardHeader,
  CardImage,
  CardName,
  CardPrice,
  CardNameText,
} from './CardStyles';

const Card = ({ title, price, img, desc }) => (
  <CardWrapper className="card">
    <CardHeader className="card-header">
      <CardImage src={img} className="card-img-top" />
    </CardHeader>
    <CardBody>
      <CardName>
        <CardNameText>{title}</CardNameText>
        <CardPrice>{price}</CardPrice>
      </CardName>

      <CardContent>
        <CardContentText>{desc}</CardContentText>
      </CardContent>
    </CardBody>
  </CardWrapper>
);

export default Card;
