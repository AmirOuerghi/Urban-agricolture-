import React from 'react';
import { Navbar } from './Navbar';
import image from './Assets/image.png';
import './Home.css';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="background-container" style={{backgroundImage: `url(${image})`}}></div>
      <p className="one">
          Sustainable Agriculture: <hr />
Sustainable agriculture embodies the ethos of harmony between human activity and the natural environment. Practices such as organic farming, agroforestry, and precision agriculture aim to minimize environmental impact while maximizing productivity. By promoting biodiversity, reducing chemical inputs, and enhancing soil health, sustainable agriculture not only ensures long-term food security but also safeguards our planet for future generations.
          </p>
          <p className="two">
          Technological Advancements: <hr />
The dawn of the digital age has ushered in a new era of agricultural innovation. From drones and satellite imaging to AI-powered analytics and robotic automation, technology is transforming every aspect of the agricultural value chain. Farmers can now make data-driven decisions, optimize resource allocation, and monitor crops with unprecedented precision. Furthermore, advancements in biotechnology hold the promise.
          </p>
          <p className="three">
          Urban Agriculture: <hr />
As global urbanization continues to accelerate, the concept of urban agriculture is gaining traction as a means to reconnect urban dwellers with the food they consume. Rooftop gardens, vertical farms, and community-supported agriculture initiatives are revitalizing vacant spaces and transforming concrete jungles into vibrant hubs of food production. By shortening supply chains and promoting local food systems, urban agriculture not only.   </p>
    </div>
  )
}
