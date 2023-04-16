
import Card from 'react-bootstrap/Card';
import  './CustomCardStyle.css'
import { Ratings } from '../ratings/Ratings';
import { useDispatch } from 'react-redux';
import {setSelectedBook} from "../../pages/books/bookSlice"
import { useNavigate } from 'react-router-dom';

export const CustomCard = ({id,title,ratings, thumbnail, summary}) => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
    const handleOnClick = ()=>{
    dispatch(setSelectedBook(id))
    navigate('/book/'+ title)
    
   }
    return (
        <Card style={{ width: '18rem' }} onClick={handleOnClick}>
            <Card.Img variant="top" src={thumbnail} height="200px" />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{summary}</Card.Text>
                <Ratings ratings={ratings} />
                
            </Card.Body>
        </Card>
    );
}

