import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactDropdown from './Appointments';

const doctorsData = [
  {
    title: 'Clinique vétérinaire1 cité el ghazela',
    specialty: 'Vétérinaire1',
    location: 'Cité El Ghazala',
    address: '5 rue el masjed el aksa cité el ghazela Cité El Ghazala 2083 Ariana Tunisie',
    imgUrl: 'https://imagecdn.med.ovh/unsafe/195x195/filters:format(webp):quality(100):blur(0)/https://www.med.tn/uploads/offices/thumbnail/221394-dr-clinique---veterinaire-cite-el-ghazela-1693577689_1515.png',
  },  {
    title: 'Clinique vétérinaire2 cité el ghazela',
    specialty: 'Vétérinaire2',
    location: 'Cité El Ghazala',
    address: '5 rue el masjed el aksa cité el ghazela Cité El Ghazala 2083 Ariana Tunisie',
    imgUrl: 'https://imagecdn.med.ovh/unsafe/195x195/filters:format(webp):quality(100):blur(0)/https://www.med.tn/uploads/offices/thumbnail/221394-dr-clinique---veterinaire-cite-el-ghazela-1693577689_1515.png',
  },  {
    title: 'Clinique vétérinaire3 cité el ghazela',
    specialty: 'Vétérinaire3',
    location: 'Cité El Ghazala',
    address: '5 rue el masjed el aksa cité el ghazela Cité El Ghazala 2083 Ariana Tunisie',
    imgUrl: 'https://imagecdn.med.ovh/unsafe/195x195/filters:format(webp):quality(100):blur(0)/https://www.med.tn/uploads/offices/thumbnail/221394-dr-clinique---veterinaire-cite-el-ghazela-1693577689_1515.png',
  },  {
    title: 'Clinique vétérinaire4 cité el ghazela',
    specialty: 'Vétérinaire4',
    location: 'Cité El Ghazala',
    address: '5 rue el masjed el aksa cité el ghazela Cité El Ghazala 2083 Ariana Tunisie',
    imgUrl: 'https://imagecdn.med.ovh/unsafe/195x195/filters:format(webp):quality(100):blur(0)/https://www.med.tn/uploads/offices/thumbnail/221394-dr-clinique---veterinaire-cite-el-ghazela-1693577689_1515.png',
  },  {
    title: 'Clinique vétérinaire5 cité el ghazela',
    specialty: 'Vétérinaire5',
    location: 'Cité El Ghazala',
    address: '5 rue el masjed el aksa cité el ghazela Cité El Ghazala 2083 Ariana Tunisie',
    imgUrl: 'https://imagecdn.med.ovh/unsafe/195x195/filters:format(webp):quality(100):blur(0)/https://www.med.tn/uploads/offices/thumbnail/221394-dr-clinique---veterinaire-cite-el-ghazela-1693577689_1515.png',
  },  {
    title: 'Clinique vétérinaire6 cité el ghazela',
    specialty: 'Vétérinaire6',
    location: 'Cité El Ghazala',
    address: '5 rue el masjed el aksa cité el ghazela Cité El Ghazala 2083 Ariana Tunisie',
    imgUrl: 'https://imagecdn.med.ovh/unsafe/195x195/filters:format(webp):quality(100):blur(0)/https://www.med.tn/uploads/offices/thumbnail/221394-dr-clinique---veterinaire-cite-el-ghazela-1693577689_1515.png',
  },  {
    title: 'Clinique vétérinaire7 cité el ghazela',
    specialty: 'Vétérinaire7',
    location: 'Cité El Ghazala',
    address: '5 rue el masjed el aksa cité el ghazela Cité El Ghazala 2083 Ariana Tunisie',
    imgUrl: 'https://imagecdn.med.ovh/unsafe/195x195/filters:format(webp):quality(100):blur(0)/https://www.med.tn/uploads/offices/thumbnail/221394-dr-clinique---veterinaire-cite-el-ghazela-1693577689_1515.png',
  },  {
    title: 'Clinique vétérinaire8 cité el ghazela',
    specialty: 'Vétérinaire8',
    location: 'Cité El Ghazala',
    address: '5 rue el masjed el aksa cité el ghazela Cité El Ghazala 2083 Ariana Tunisie',
    imgUrl: 'https://imagecdn.med.ovh/unsafe/195x195/filters:format(webp):quality(100):blur(0)/https://www.med.tn/uploads/offices/thumbnail/221394-dr-clinique---veterinaire-cite-el-ghazela-1693577689_1515.png',
  },  {
    title: 'Clinique vétérinaire9 cité el ghazela',
    specialty: 'Vétérinaire9',
    location: 'Cité El Ghazala',
    address: '5 rue el masjed el aksa cité el ghazela Cité El Ghazala 2083 Ariana Tunisie',
    imgUrl: 'https://imagecdn.med.ovh/unsafe/195x195/filters:format(webp):quality(100):blur(0)/https://www.med.tn/uploads/offices/thumbnail/221394-dr-clinique---veterinaire-cite-el-ghazela-1693577689_1515.png',
  },
  // Add more doctors as needed
];


function Doctors() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter doctors based on the search term
  const filteredDoctors = doctorsData.filter((doctor) =>
    doctor.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search by doctor title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <Row>
        {/* Display filtered doctors at the top */}
        {filteredDoctors.map((doctor, index) => (
          <Col md={4} key={index}>
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src={doctor.imgUrl} />
              <Card.Body>
                <Card.Title>{doctor.title}</Card.Title>
                <p>{doctor.specialty}</p>
                <p>{doctor.location}</p>
                <Card.Text>{doctor.address}</Card.Text>
                <ContactDropdown />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        {/* Display other doctors */}
        {doctorsData
          .filter((doctor) => !filteredDoctors.includes(doctor))
          .map((doctor, index) => (
            <Col md={4} key={index}>
              <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={doctor.imgUrl} />
                <Card.Body>
                  <Card.Title>{doctor.title}</Card.Title>
                  <p>{doctor.specialty}</p>
                  <p>{doctor.location}</p>
                  <Card.Text>{doctor.address}</Card.Text>
                  <ContactDropdown />
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
}

export default Doctors;