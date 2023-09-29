import React,{Component, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onLogin({ username, password });
  };
};

export class Login extends Component {
    render() {
        return (
            <Form>
                <h4> Inicio de sesión </h4>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre de usuario</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <a href="http://localhost:3000/listado">
                    <Button variant="success">
                        Ingresar
                    </Button>
                </a>
                
                <a href="http://localhost:3000/error">
                    <Button variant="danger">
                        Cancelar
                    </Button>
                </a>

            </Form>
        );
    }
}