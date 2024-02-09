import React, { useState, useEffect,useContext } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faSave, faTimes, faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';
import './Plants.css';
import { ShopContext } from '../ShopContext';
import data from '../data/data.json'; 


Modal.setAppElement('#root'); 

function Plants() {
  const [plants, setPlants] = useState([]);
  const [updatedPlantData, setUpdatedPlantData] = useState({});
  const [updateMode, setUpdateMode] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState({});
  const [newPlantData, setNewPlantData] = useState({});
  const [addingPlant, setAddingPlant] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const{addToCart}=useContext(ShopContext); 


  useEffect(() => {
    fetchPlants(data);
  }, []);

  const fetchPlants = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/Plants/get');
      setPlants(response.data);
    } catch (error) {
      console.error('Error fetching plants:', error);
    }
  };

  const deletePlant = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/Plants/delete${id}`);
      fetchPlants();
    } catch (error) {
      console.error('Error deleting plant:', error);
    }
  };

  const updatePlant = async (id) => {
    try {
      await axios.put(`http://localhost:8000/api/Plants/update/${id}`, updatedPlantData);
      fetchPlants();
      setModalIsOpen({ ...modalIsOpen, [id]: false });
      setUpdatedPlantData({});
    } catch (error) {
      console.error('Error updating plant:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedPlantData({
      ...updatedPlantData,
      [name]: value
    });
  };

  const enableUpdateMode = (id, plant) => {
    setUpdateMode(id);
    setUpdatedPlantData(plant);
    setModalIsOpen({ ...modalIsOpen, [id]: true });
  };

  const disableUpdateMode = (id) => {
    setUpdateMode(null);
    setUpdatedPlantData({});
    setModalIsOpen({ ...modalIsOpen, [id]: false });
  };

  const handleNewPlantInputChange = (e) => {
    const { name, value } = e.target;
    setNewPlantData({
      ...newPlantData,
      [name]: value
    });
  };

  const addPlant = async () => {
    try {
      await axios.post('http://localhost:8000/api/Plants/add', newPlantData);
      setAddingPlant(false);
      setNewPlantData({});
      fetchPlants();
    } catch (error) {
      console.error('Error adding plant:', error);
    }
  };

  // Function to filter plants based on search query
  const filteredPlants = plants.filter(plant => {
    return plant.Name.toLowerCase().includes(searchQuery.toLowerCase());
  });
  return (
    <div>
      <h1>Plant Products</h1>
      {/* "Add New Plant" form */}
       {/* Search input */}
       <div className="search-container">
  <input 
    className="search-input"
    type="text" 
    placeholder="Search by name..." 
    value={searchQuery} 
    onChange={(e) => setSearchQuery(e.target.value)} 
  />
</div>
      {addingPlant && (
        <Modal
          isOpen={addingPlant}
          onRequestClose={() => setAddingPlant(false)}
          contentLabel="Add New Plant Modal"
          style={{
            content: {
              width: '400px',
              maxHeight: '400px',
              margin: 'auto',
              borderRadius: '32px'
            },
         
           
          }}
        >
          <div className="new-plant-form">
            <h2>Add New Plant</h2>
            <div className="input-container">
              <input type="text" name="img" value={newPlantData.img || ''} onChange={handleNewPlantInputChange} placeholder="Image URL" />
            </div>
            <div className="input-container">
              <input type="text" name="Name" value={newPlantData.Name || ''} onChange={handleNewPlantInputChange} placeholder="Name" />
            </div>
            <div className="input-container">
              <input type="text" name="Size" value={newPlantData.Size || ''} onChange={handleNewPlantInputChange} placeholder="Size" />
            </div>
            <div className="input-container">
              <input type="text" name="Price" value={newPlantData.Price || ''} onChange={handleNewPlantInputChange} placeholder="Price" />
            </div>
            <div className="input-container">
              <FontAwesomeIcon icon={faSave} className="icon save" onClick={addPlant} />
              <FontAwesomeIcon icon={faTimes} className="icon cancel" onClick={() => setAddingPlant(false)} />
            </div>
          </div>
        </Modal>
      )}
      {/* Icon to toggle "Add New Plant" form */}
      {!addingPlant && (
        <div className="add-plant-button" onClick={() => setAddingPlant(true)}>
          <FontAwesomeIcon icon={faFileCirclePlus} /> 
        </div>
      )}
      {/* Existing plant items */}
      <div className="plant-container">
      {filteredPlants.map((plant, index) => (
         <div key={index} className="plant-item">
            <img src={plant.img} alt={plant.Name} className="plant-image" />
            <div className="plant-details">
              <h3 className="plant-name">{plant.Name}</h3>
              <p className="plant-size">Size: {plant.Size}</p>
              <p className="plant-price">Price: {plant.Price}</p>
              <button onClick={()=>{addToCart(plant.id)}}> 🛒</button>
              {updateMode === plant.id && (
                <Modal
                  isOpen={modalIsOpen[plant.id]}
                  onRequestClose={() => disableUpdateMode(plant.id)}
                  contentLabel="Update Plant Modal"
                  style={{
                    content: {
                      width: '400px',
                      maxHeight: '400px',
                      margin: 'auto',
                      borderRadius: '32px'
                    },
                    overlay: {
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    },
                    content: {
                      width: '300px', // Adjust the width as needed
                      maxHeight: '400px',
                      overflowY: 'auto',
                      border: '1px solid #ccc',
                      borderRadius: '5px',
                      padding: '20px',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    },
                  }}
                >
                  <div className="input-container">
                    <input type="text" name="img" value={updatedPlantData.img || ''} onChange={handleInputChange} placeholder="New Image URL" />
                  </div>
                  <div className="input-container">
                    <input type="text" name="Name" value={updatedPlantData.Name || ''} onChange={handleInputChange} placeholder="New Name" />
                  </div>
                  <div className="input-container">
                    <input type="text" name="Size" value={updatedPlantData.Size || ''} onChange={handleInputChange} placeholder="New Size" />
                  </div>
                  <div className="input-container">
                    <input type="text" name="Price" value={updatedPlantData.Price || ''} onChange={handleInputChange} placeholder="New Price" />
                  </div>
                  <div className="input-container">
                    <FontAwesomeIcon icon={faSave} className="icon save" onClick={() => updatePlant(plant.id)} />
                    <FontAwesomeIcon icon={faTimes} className="icon cancel" onClick={() => disableUpdateMode(plant.id)} />
                  </div>
                </Modal>
              )}
              {updateMode !== plant.id && (
                <div>
                  <FontAwesomeIcon icon={faEdit} className="icon edit" onClick={() => enableUpdateMode(plant.id, plant)} />
                  <FontAwesomeIcon icon={faTrashAlt} className="icon delete" onClick={() => deletePlant(plant.id)} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plants;
