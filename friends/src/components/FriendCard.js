import React from "react";
import Card from "react-bootstrap/Card";

const FriendCard = props => {
    return (
        <Card>
            <Card.Header>
                <Card.Title>{props.friend.name}</Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Text>{props.friend.email}</Card.Text>
                <Card.Text>Age: {props.friend.age}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default FriendCard;
