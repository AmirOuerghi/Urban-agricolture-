import React, { useState, useEffect } from 'react';
import data from '../data/artical.json';
import './artical.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faHeart } from '@fortawesome/free-solid-svg-icons';

export default function Artical() {
  const [likes, setLikes] = useState({});
  const [showAddForm, setShowAddForm] = useState(false);
  const [newArticle, setNewArticle] = useState({ title: '', description: '', img: '' });

  // Load likes from localStorage on component mount
  useEffect(() => {
    const storedLikes = JSON.parse(localStorage.getItem('likes'));
    if (storedLikes) {
      setLikes(storedLikes);
    }
  }, []);

  // Update localStorage whenever likes change
  useEffect(() => {
    localStorage.setItem('likes', JSON.stringify(likes));
  }, [likes]);

  const handleLike = (title) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [title]: (prevLikes[title] || 0) + 1
    }));
  };

  const handleSubmit = () => {
    // Add new article to data
    data.push(newArticle);
    // Reset form fields
    setNewArticle({ title: '', description: '', img: '' });
    // Hide add article form
    setShowAddForm(false);
  };

  return (
    <div className="mainContainer">
      <div className="articlesContainer">
        <h1 className="articlesTitle">GOOD AGRICULTURAL PRACTICES</h1>
        <div className="cardContainer">
          {data.map((item, index) => (
            <div className="cardItem" key={index}>
              <div className="card">
                <img className="cardImage" src={item.img} alt={item.Tittle} />
                <div className="cardContent">
                  <h5 className="cardTitle">{item.Tittle}</h5>
                  <p className="cardDescription">{item.description}</p>
                </div>
                <div className="cardActions">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className={`likeIcon ${likes[item.Tittle] ? 'liked' : ''}`}
                    onClick={() => handleLike(item.Tittle)}
                    style={{ color: likes[item.Tittle] ? 'red' : 'black' }} 
                  />
                  <span className="likeCount">{likes[item.Tittle] || 0}</span> 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showAddForm && (
        <div className="addArticleForm">
          <input
            type="text"
            placeholder="Title"
            value={newArticle.title}
            onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Description"
            value={newArticle.description}
            onChange={(e) => setNewArticle({ ...newArticle, description: e.target.value })}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newArticle.img}
            onChange={(e) => setNewArticle({ ...newArticle, img: e.target.value })}
          />
          <FontAwesomeIcon
            icon={faPlus}
            className="addArticleIcon"
            onClick={handleSubmit}
          />
        </div>
      )}
      <div className="toggleAddFormButton" onClick={() => setShowAddForm(!showAddForm)}>
        <FontAwesomeIcon icon={faPlus} />
      </div>
    </div>
  );
}
