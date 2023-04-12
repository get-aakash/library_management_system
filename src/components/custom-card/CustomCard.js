
import Card from 'react-bootstrap/Card';
import  './CustomCardStyle.css'
import { Ratings } from '../ratings/Ratings';

export const CustomCard = ({title,ratings, thumbnail, summary}) => {
    return (
        <Card style={{ width: '18rem' }} >
            <Card.Img variant="top" src={thumbnail} height="200px" />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{summary}</Card.Text>
                <Ratings ratings={ratings} />
                
            </Card.Body>
        </Card>
    );
}

