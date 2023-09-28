import 'twin.macro';
import cardImg from '../../assets/images/item-3.jpeg';
import {
  CardWrapper,
  CardBody,
  CardContent,
  CardContentText,
  CardHeader,
  CardImage,
  CardName,
  CardNameDesignation,
  CardNameText,
} from './CardStyles';

const Card = () => (
  <CardWrapper className="card">
    <CardHeader className="card-header">
      <CardImage src={cardImg} className="card-img-top" />
    </CardHeader>
    <CardBody>
      <CardName>
        <CardNameText>how are you</CardNameText>
        <CardNameDesignation>ds</CardNameDesignation>
      </CardName>

      <CardContent>
        <CardContentText>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, ratione?
        </CardContentText>
      </CardContent>
    </CardBody>
  </CardWrapper>
);

export default Card;
