import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardGroup, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import './farmingequipment.css';

const FarmingEquipment = () => {
    const [data, setData] = useState([]);
    const [selectedType, setSelectedType] = useState(null);
    const [formData, setFormData] = useState({
        Name: '',
        Type: '',
        imageURL: '',
        Description: '',
        Size: '',
        Dimensions: '',
        Capacity: ''
    });
    const [showForm, setShowForm] = useState(false); // State to manage form visibility

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/farmingequipment/');
            setData(response.data);
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    };

    const filterEquipmentByType = () => {
        if (!selectedType) return data;
        return data.filter(equipment => equipment.Type === selectedType);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/farmingequipment/', formData);
            fetchData();
            setFormData({
                Name: '',
                Type: '',
                imageURL: '',
                Description: '',
                Size: '',
                Dimensions: '',
                Capacity: ''
            });
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    };

    return (
        <div className="container">
            <Navbar bg="dark" variant="dark" expand="lg">
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
                    {/* Button to toggle form visibility */}
                    <Button variant="outline-light" onClick={() => setShowForm(!showForm)}>Toggle Form</Button>
                </Navbar.Collapse>
            </Navbar>

           
            {showForm && (
                <Form className="mt-3" onSubmit={handleSubmit}>
                    <FormControl type="text" name="Name" value={formData.Name} onChange={handleInputChange} placeholder="Name" className="mr-sm-2" />
                    <FormControl type="text" name="Type" value={formData.Type} onChange={handleInputChange} placeholder="Type" className="mr-sm-2" />
                    <FormControl type="text" name="imageURL" value={formData.imageURL} onChange={handleInputChange} placeholder="Image URL" className="mr-sm-2" />
                    <FormControl type="text" name="Description" value={formData.Description} onChange={handleInputChange} placeholder="Description" className="mr-sm-2" />
                    <FormControl type="text" name="Size" value={formData.Size} onChange={handleInputChange} placeholder="Size" className="mr-sm-2" />
                    <FormControl type="text" name="Dimensions" value={formData.Dimensions} onChange={handleInputChange} placeholder="Dimensions" className="mr-sm-2" />
                    <FormControl type="text" name="Capacity" value={formData.Capacity} onChange={handleInputChange} placeholder="Capacity" className="mr-sm-2" />
                    <Button variant="outline-primary" type="submit">Submit</Button>
                </Form>
            )}

            <div className="card-container">
                <CardGroup>
                    {filterEquipmentByType().map((equipment, index) => (
                        <Card key={index}>
                            <Card.Img variant="top" src={equipment.imageURL} />
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
        </div>
    );
};

export default FarmingEquipment;
