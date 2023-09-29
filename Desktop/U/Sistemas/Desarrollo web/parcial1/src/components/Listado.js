import React,{Component} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export class Listado extends Component {
    render() {
        return (

            <div className="mt-5 d-flex" justify-content-left> 
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Tipo</th>
                        <th>Región</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Café Especial para ti</td>
                        <td>Blend</td>
                        <td>Angelópolis, Antioquia</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Café Especial Navegante</td>
                        <td>Café de Origen</td>
                        <td>Guatapé, Antioquia</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Café Especial El Prístino</td>
                        <td>Blend</td>
                        <td>Chinchiná, Caldas</td>
                        </tr>
                        <tr>
                        <td>4</td>
                        <td>Café Especial Valentina</td>
                        <td>Café de Origen</td>
                        <td>Fredonia, Antioquia</td>
                        </tr><tr>
                        <td>5</td>
                        <td>Café Especial Sombrero Vueltiao</td>
                        <td>Café de Origen</td>
                        <td>Amagá, Antioquia</td>
                        </tr>
                        <tr>
                        <td>6</td>
                        <td>Café Especial La Manchuria</td>
                        <td>Blend</td>
                        <td>Salgar, Antioquia</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}