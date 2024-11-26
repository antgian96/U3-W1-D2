import React from "react";
import { Card } from "react-bootstrap";
import fantasy from "../fantasy.json";  
const CustomCardBooks = () => {
    return (
        <>
            {fantasy.slice(0,3).map((libro, index) => {  
                return (
                    <Card key={index} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={libro.img} />  
                        <Card.Body>
                            <Card.Title>{libro.title}</Card.Title> 
                            <Card.Text>
                                {libro.price}  
                            </Card.Text>
                            <Card.Text></Card.Text>
                        </Card.Body>
                    </Card>
                );
            })}
        </>
    );
}

export default CustomCardBooks;
