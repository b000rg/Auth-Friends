import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { foundLocalToken, logout } from "./actions/actions";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";

const App = props => {
    searchForToken(props.foundLocalToken);

    return (
        <Container>
            <Col>
                {props.token ? (
                    <Redirect to="/friends" />
                ) : (
                    <Redirect to="/login" />
                )}
                <Button onClick={props.logout}>Log out</Button>
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/friends">
                        <FriendsList />
                    </Route>
                </Switch>
            </Col>
        </Container>
    );
};

const searchForToken = foundLocalToken => {
    let token = localStorage.getItem("token");
    if (token) foundLocalToken(token);
};

const mapStateToProps = state => {
    return { token: state.token };
};

export default connect(mapStateToProps, { foundLocalToken, logout })(App);
