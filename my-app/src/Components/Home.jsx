import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const pages = [
  {
    name: 'Plants',
    type: 'Type 1',
    image: 'https://www.nonsoloambiente.it/files/2023/03/tree20planting20will20save20the20world.jpeg',
    description: 'Delve into the fascinating world of plants and gardening techniques. From cultivating a lush indoor oasis to mastering the art of growing your own herbs and vegetables, this page offers a wealth of knowledge for both novice and experienced gardeners. Explore various plant species, learn about soil composition and watering methods, and discover tips for maintaining healthy and vibrant gardens all year round.',
    link: '/plants'
  },
  {
    name: 'Farming Equipment',
    type: 'Type 2',
    image: '',
    description: 'Discover the latest farming equipment and machinery to optimize agricultural operations and increase productivity. Whether you’re a small-scale farmer or managing a large commercial farm, this page offers insights into innovative tools, technologies, and techniques for modern farming practices. Explore a range of equipment, from tractors and harvesters to precision agriculture technologies, and stay informed about advancements in sustainable farming methods.',
    link: '/farming-equipment'
  },
  {
    name: 'Landscaping Ideas',
    type: 'Type 3',
    image: '',
    description: 'Unlock the secrets to creating stunning outdoor spaces with inspiring landscaping ideas and design tips. Whether you’re revamping your backyard, planning a new garden layout, or enhancing your property’s curb appeal, this page provides a wealth of inspiration for transforming your outdoor environment. Discover creative landscape designs, learn about plant combinations and hardscape elements, and find practical advice for executing your landscaping projects with style and flair.',
    link: '/landscaping-ideas'
  },
  {
    name: 'Veterinarians for Animals',
    type: 'Type 4',
    image: '',
    description: 'Find reliable veterinarians to care for your beloved animals. Whether you have pets or livestock, ensuring their health and well-being is essential. This page connects you with experienced professionals who specialize in various animal species, offering medical care, advice, and support to keep your furry or feathered friends happy and healthy.',
    link: '/veterinarians'
  }
];

const Home = () => {
  return (
    <div className="home">
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
  );
};

export default Home;
