import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import './styles.css'; // Import your custom CSS

function App() {
  const [activeCard, setActiveCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: 'Government Yojana Awareness',
      text: 'Provide detailed information about various government schemes.',
      date: '2 days ago',
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      text: 'Enable to buy and sell agricultural products and equipment conveniently.',
      date: '2 days ago',
    },
    {
      id: 3,
      title: 'Daily APMC Price Updates',
      text: 'Offer real-time updates on APMC prices, helping farmers.',
      date: '2 days ago',
    },
    {
      id: 4,
      title: 'Community Network',
      text: 'Establish a social media-like platform for farmers to connect, share experiences, and exchange knowledge',
      date: '2 days ago',
    },
    {
      id: 5,
      title: 'Informative Articles',
      text: 'Provide articles categorized for easy access, helping farmers stay informed and learn new techniques.',
      date: '2 days ago',
    },
    {
      id: 6,
      title: 'Weather Forecasting',
      text: 'Integrate weather forecasting to aid farmers in planning their agricultural activities effectively.',
      date: '2 days ago',
    },
  ];

  const handleClick = (cardId) => {
    if (activeCard === cardId) {
      setActiveCard(null);
    } else {
      setActiveCard(cardId);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`col-md-4 mb-4 ${activeCard === card.id ? 'border border-success' : ''}`}
            onClick={() => handleClick(card.id)}
          >
            <div className={`card text-center ${activeCard === card.id ? 'bg-success text-white' : 'bg-light'}`}>
              <div className="card-header">
                Featured
              </div>
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text text-left">{card.text}</p>
                <a href="#" className={`btn ${activeCard === card.id ? 'btn-light' : 'btn-primary'}`}>click to visit</a>
              </div>
              <div className="card-footer text-muted">
                {card.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
