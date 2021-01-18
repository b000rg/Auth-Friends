import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";
import { getFriendsList } from "../actions/actions";
import FriendCard from "./FriendCard";

const FriendsList = props => {
    useEffect(() => {
        props.getFriendsList();
    }, []);

    return (
        <Container>
            {props.friends.map(friend => (
                <FriendCard friend={friend} key={friend.id} />
            ))}
        </Container>
    );
};

const mapStateToProps = state => {
    return { friends: state.friends };
};

export default connect(mapStateToProps, { getFriendsList })(FriendsList);
