// Carousel.js
import React from 'react';
import '../style/cards.css'; // Asegúrate de que la ruta sea correcta

const Cards = () => {
    return (
        <>
           

            <section className="section">
            <h2 className='Titulo'>Nuestros servicios</h2>
                  
                <div className="cards">
                    <a href="#" className="card card1">
                        <figure className="visual">
                            <img
                                className="cardImg"
                                src="https://i.pinimg.com/564x/c3/3a/59/c33a596d145b74da7da553d7b6cc0433.jpg"
                                alt="Person with a game controller in hand"
                            />
                            <figcaption className="figcaption">Articulos</figcaption>
                        </figure>
                    </a>
                    <a href="#" className="card card2">
                        <figure className="visual">
                            <img
                                className="cardImg"
                                src="https://i.pinimg.com/736x/6a/5e/95/6a5e9595e56887899e5931c3df2c49d6.jpg"
                                 alt="Person with curly hair in neon lighting"
                            />
                            <figcaption className="figcaption">Dropshipping</figcaption>
                        </figure>
                    </a>
                    <a href="#" className="card card3">
                        <figure className="visual">
                            <img
                                className="cardImg"
                                src="https://i.pinimg.com/564x/62/25/50/622550f03792f2065450874c5f0ce523.jpg"
                                alt="Person in vibrant neon lighting with abstract shapes"
                            />
                            <figcaption className="figcaption">Envios y Logistica</figcaption>
                        </figure>
                    </a>
                    <a href="#" className="card card4">
                        <figure className="visual">
                            <img
                                className="cardImg"
                                src="https://i.pinimg.com/564x/bc/21/6f/bc216f545736e63e0bc843dd05e9b97e.jpg"
                                alt="Person wearing a virtual reality headset in a blue-lit room"
                            />
                            <figcaption className="figcaption">Fullfilment</figcaption>
                        </figure>
                    </a>
                </div>
                <h2 className='Text'>Conoce nuestros servicios y vuelvete lider en el desarrollo de negocios y comercio electronico</h2>
            
            </section>
        </>
    );
};

export default Cards;
