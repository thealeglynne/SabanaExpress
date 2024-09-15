import Head from 'next/head'
import styles from '../style/home.css'
import Cards from "../componentes/cards"
import Carrucel from "../componentes/carrucel"
import CardProduct from "../componentes/CardProduct"
export default function Home() {
  return (
   
 
     
    <div className='container'>

    <div className='main'>
    <div className="main1">
     <div className="content">
    <div className="text-section">
   
      <h1 className="title">Sabana Express</h1>
      <p className="description">
        El mejor aliado logístico para tu Ecommerce.
        Plataforma líder en soluciones tecnológicas para tu negocio online.
      </p>
    </div>
    <div className="image-section">
      <img src="https://i.pinimg.com/originals/65/86/43/658643a0c319dea11fcaa3a18339be0e.gif" alt="Ecommerce" />
    </div>
  </div>
    </div>
    <div className="main2">
    <Cards />
    </div>
    <div className="main3">
    <CardProduct />
    </div>
    <div className="main1">
    <Carrucel />
    </div>
    <div className="main1">
      <h1>hola mundo</h1>
    </div>
    <div className="main1">
      <h1>hola mundo</h1>
    </div>
    <div className="main1">
      <h1>hola mundo</h1>
    </div>
    <div className="main1">
      <h1>hola mundo</h1>
    </div>
    <div className="main1">
      <h1>hola mundo</h1>
    </div>
    </div>
    </div>

  )
}
