import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { login } from "../actions/actions";

const Login = props => {
    const [formInput, setFormInput] = useState({ username: "", password: "" });

    const handleSubmit = evt => {
        evt.preventDefault();
        props.login(formInput);
    };

    const handleChange = evt => {
        setFormInput({ ...formInput, [evt.target.name]: evt.target.value });
    };

    return (
        <Card>
            {props.token ? <Redirect to="/friends" /> : null}
            <Card.Header>Login</Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            name="username"
                            value={formInput.username}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            value={formInput.password}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Button type="submit" onClick={handleSubmit}>
                        Login
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

const mapStateToProps = state => {
    return { token: state.token, errors: state.errors };
};

export default connect(mapStateToProps, { login })(Login);
