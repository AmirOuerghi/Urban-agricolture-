import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardGroup, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'; 
import './farmingequipment.css';

const FarmingEquipment = () => {
    const [data, setData] = useState([]);
    const [selectedType, setSelectedType] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/farmingequipment/');
                setData(response.data);
            } catch (error) {
                console.log(`Error: ${error}`);
            }
        };

        fetchData();
    }, []);

    const filterEquipmentByType = () => {
        if (!selectedType) return data;
        return data.filter(equipment => equipment.type === selectedType);
    };

    return (
        <div className="container">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#">Farm Equipment</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link onClick={() => setSelectedType(null)}>All</Nav.Link>
                        <Nav.Link onClick={() => setSelectedType('vehicles')}>Vehicles</Nav.Link>
                        <Nav.Link onClick={() => setSelectedType('plantation')}>Plantation Equipment</Nav.Link>
                        <Nav.Link onClick={() => setSelectedType('harvesting')}>Harvesting Equipment</Nav.Link>
                        <Nav.Link onClick={() => setSelectedType('irrigation')}>Irrigation & Spraying Equipment</Nav.Link>
                        <Nav.Link onClick={() => setSelectedType('livestock')}>Livestock Equipment</Nav.Link>
                        <Nav.Link onClick={() => setSelectedType('storage')}>Storage & Handling Equipment</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>

            <CardGroup>
                {filterEquipmentByType().map((equipment, index) => (
                    <Card key={index}>
                        <Card.Img variant="top" src={equipment.ImageURL} />
                        <Card.Body>
                            <Card.Title>{equipment.Name}</Card.Title>
                            <Card.Text>
                                <p><strong>Type:</strong> {equipment.Type}</p>
                                <p><strong>Size:</strong> {equipment.Size}</p>
                                <p><strong>Dimensions:</strong> {equipment.Dimensions}</p>
                                <p><strong>Capacity:</strong> {equipment.Capacity}</p>
                                <p><strong>Description:</strong> {equipment.Description}</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </CardGroup>
        </div>
    );
};

export default FarmingEquipment;
