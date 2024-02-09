import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Form, FormControl } from 'react-bootstrap';
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
            <div className="sidebar">
                <h1 className="sidebar-brand">Farm Equipment</h1>
                <ul className="sidebar-menu">
                    <li className="sidebar-item">
                        <Button variant="light" onClick={() => setSelectedType(null)}>All</Button>
                    </li>
                    <li className="sidebar-item">
                        <Button variant="light" onClick={() => setSelectedType('vehicles')}>Vehicles</Button>
                    </li>
                    <li className="sidebar-item">
                        <Button variant="light" onClick={() => setSelectedType('plantation')}>Plantation Equipment</Button>
                    </li>
                    <li className="sidebar-item">
                        <Button variant="light" onClick={() => setSelectedType('harvesting')}>Harvesting Equipment</Button>
                    </li>
                    <li className="sidebar-item">
                        <Button variant="light" onClick={() => setSelectedType('irrigation')}>Irrigation & Spraying Equipment</Button>
                    </li>
                    <li className="sidebar-item">
                        <Button variant="light" onClick={() => setSelectedType('livestock')}>Livestock Equipment</Button>
                    </li>
                    <li className="sidebar-item">
                        <Button variant="light" onClick={() => setSelectedType('storage')}>Storage & Handling Equipment</Button>
                    </li>
                </ul>
                <Button variant="light" onClick={() => setShowForm(!showForm)}>Toggle Form</Button>
            </div>
            <div className="main-content">
                {showForm && (
                    <Form className="form-container" onSubmit={handleSubmit}>
                        <FormControl type="text" name="Name" value={formData.Name} onChange={handleInputChange} placeholder="Name" className="form-control" />
                        <FormControl type="text" name="Type" value={formData.Type} onChange={handleInputChange} placeholder="Type" className="form-control" />
                        <FormControl type="text" name="imageURL" value={formData.imageURL} onChange={handleInputChange} placeholder="Image URL" className="form-control" />
                        <FormControl type="text" name="Description" value={formData.Description} onChange={handleInputChange} placeholder="Description" className="form-control" />
                        <FormControl type="text" name="Size" value={formData.Size} onChange={handleInputChange} placeholder="Size" className="form-control" />
                        <FormControl type="text" name="Dimensions" value={formData.Dimensions} onChange={handleInputChange} placeholder="Dimensions" className="form-control" />
                        <FormControl type="text" name="Capacity" value={formData.Capacity} onChange={handleInputChange} placeholder="Capacity" className="form-control" />
                        <Button variant="primary" type="submit" className="btn-submit">Submit</Button>
                    </Form>
                )}

                <div className="card-container">
                    {filterEquipmentByType().map((equipment, index) => (
                        <Card key={index} className="card">
                            <Card.Img variant="top" src={equipment.imageURL} className="card-img-top" />
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
                </div>
            </div>
        </div>
    );
};

export default FarmingEquipment;
