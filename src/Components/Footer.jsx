import React from 'react'
import style from '../CSS/Footer.module.css'

const Footer = () => {
  return (
    
      <footer className={style.footer} style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className={style.redes}>
            <a href='https://www.aluracursos.com/' target='blank'>
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://twitter.com/franklyn_dev' target='blank'>
                <img src="/img/twitter.png" alt='twitter' />
            </a>
            <a href='https://www.instagram.com/franklyncastro_dev/' target='blank'>
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Franklyn Y. Castro</strong>
    </footer>
    
  )
}

export default Footer
