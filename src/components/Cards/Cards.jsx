import 'twin.macro';
import {
  Card,
  CardAction,
  CardBody,
  CardContent,
  CardContentText,
  CardFooter,
  CardHeader,
  CardImage,
  CardImageShadow,
  CardName,
  CardNameDesignation,
  CardNameText,
} from './CardStyles';
import Button from '../Button/Button';

const Cards = ({ name, job, image, text, nextPerson, prevPerson, randomNumber }) => (
  <Card variant="big" className="card">
    <CardHeader className="card-header">
      <CardImage src={image} className="card-img-top" />
      <CardImageShadow />
    </CardHeader>
    <CardBody>
      <CardName>
        <CardNameText>{name}</CardNameText>
        <CardNameDesignation>{job}</CardNameDesignation>
      </CardName>

      <CardContent>
        <CardContentText>{text}</CardContentText>
      </CardContent>
    </CardBody>

    <CardFooter>
      <CardAction>
        <Button variant="primary" onClick={randomNumber}>
          Surprise Me!
        </Button>
      </CardAction>
    </CardFooter>
  </Card>
);

export default Cards;
