// Appointments.jsx
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MapModal from './MapModel';

const ContactDropdown = () => {
  const [userNumber, setUserNumber] = useState('');
  const [userName, setUserName] = useState('');

  const handleUserNumberChange = (e) => {
    setUserNumber(e.target.value);
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const showNotification = (message, userNumber) => {
    toast(`${message} for user ${userNumber}`);
  };

  const phone = () => {
    toast('📞123-456-7890');
  };

  const handleNoteClick = () => {
    showNotification(`Wait for the call ☎️; we will schedule an appointment for ${userName}`, userNumber);
  };

  return (
    <Row>
      <Col md={12}>
        <Card style={{ width: '85%' }}>
          <Card.Body>
          <h2>to contact this doctor please input your contact</h2>
            <label htmlFor="userName">Enter your user fullname:</label>
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={handleUserNameChange}
            />

            <label htmlFor="userNumber">Enter your user number:</label>
            <input
              type="text"
              id="userNumber"
              value={userNumber}
              onChange={handleUserNumberChange}
            />

            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Contact
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={phone}>
                  📞 Phone veterinary
                </Dropdown.Item>
                <Dropdown.Item as={MapModal} mapUrl={'https://www.google.com/maps/dir/36.1729404,8.7150938/36.865275,10.1642883/@36.4720248,10.5641459,8z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0?entry=ttu'}>
                  📍 Map
                </Dropdown.Item>
                <Dropdown.Item onClick={handleNoteClick}>
                  📅 Appointment
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Card.Body>
        </Card>
      </Col>
      <ToastContainer />
    </Row>
  );
};

export default ContactDropdown;
