
import Card from 'react-bootstrap/Card';
import  './CustomCardStyle.css'

export const CustomCard = ({title, img, summary}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} height="200px" />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                {/* <Card.Text>
                    {summary}
                </Card.Text> */}
                
            </Card.Body>
        </Card>
    );
}

