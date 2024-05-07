import './App.css';
import React, { useState } from 'react';
import natural from './images/natural.png';
import tube from './images/tube.png';
import pork from './images/pork.png';
import local from './images/local.png';
import diamond from './images/diamond.png';
import demaquillant from './images/demaquillant.png';
import liquide from './images/liquide.png';
import creme from './images/creme.png';
import {Carousel} from "./Carousel";
import Temoignages from "./Pages/Temoignages";
import wavyline from './images/wavyline.png';
import secondline from './images/secondline.png';
import thirdline from './images/thirdline.png';
import forthline from './images/forthline.png';
import FOTO1 from './images/FOTO1.png';
import FOTO2 from './images/FOTO2.png';
import FOTO3 from './images/FOTO3.png';
import visage from './images/visage.png';
import corps from './images/corps.png';
import cheveux from './images/cheveux.png';


const App=()=>{
    const handleClick = () => {
        console.log('Le bouton a été cliqué !');
    };
   

  return (
   <div className="contenue">
        <Carousel/>
        <div className='uncle'>
            <div className='avis-client'>Avis client 5/5</div>
        </div>
        <div className='logo'>
            <h1 className='sc'>SC</h1>
        </div>
        <nav className='scroll'>
            <div className='acceuil'>Acceuil</div>
            <div className='boutique'>Boutique</div>
            <div className='diagnostic'>Diagnostic</div>
            <div className='la-marque'>La marque</div>
        </nav>
        <div className='rectangle'></div>
        <h1 className='quality'>Nos valeurs</h1>
        <div className='values'>
            <img src={natural} alt='' className='natural-icon'/>
            <div className='produits-naturels'>Produits naturels</div>
            <img src={tube} alt='' className='tube-icon'/>
            <div className='sans-parabene'>Sans parabène ni sulfate</div>
            <img src={pork} alt='' className='pork-icon'/>
            <div className='vegan'>vegan & sans cruauté</div>
            <img src={local} alt='' className='local-icon'/>
            <div className='produits-maroc'>Produits du Maroc</div>
            <img src={diamond} alt='' className='diamond-icon'/>
            <div className='unique'>Unique</div>
        </div>
        <div className='rectangle'></div>
        <h1 className='quality'>Nos produits personnalisés</h1>
        <div className='produits-personnalisés'>
            <div className='cadre1'>
                <img src={demaquillant} alt='' className='dem'/>
            </div>
            <div className='cadre2'>
                <img src={liquide} alt='' className='blush'/>
            </div>
            <div className='cadre3'>
                <img src={creme} alt='' className='creme'/>
            </div>
        </div>
      
        <button className="diagnostic"onClick={handleClick}>Faire Mon Diagnostic</button>
        <div className='best'>
         <h1 className='vendres'>Meilleurs vendeurs</h1>
         <img src={wavyline} alt='' className='wavyline'/>
         <img src={secondline} alt='' className='secondline'/>
         <img src={thirdline} alt='' className='thirdline'/>
         <img src={forthline} alt='' className='forthline'/>
        </div>
        <div className='plan'>
            <img src={FOTO1} alt='' className='FOTO1'/>
            <img src={FOTO2} alt='' className='FOTO2'/>
            <img src={FOTO3} alt='' className='FOTO3'/>
        </div>
        <div className='serum'> 
            <p>Sérum  hydratant personnalisé</p><br/>
            <p>J'adore mon sérum personnalisé!<br/> La texture est parfaite et je vois <br/>déjà les résultats après seulement<br/> quelques semaines d'utilisation.<br/> L'odeur est également merveilleuse! <br/>Un gros coup de coeur!</p>
            <p>-Sarah-</p>
        </div>
        <div className='deodorant'> 
            <p>Déodorant personnalisé</p><br/>
            <p> La texture est légère, l'odeur discrète<br/> et agréable, et surtout, il offre une protection<br/> efficace tout au long de la journée. J'apprécie vraiment de savoir que je n'utilise que<br/> des ingrédients naturels</p>
            <p>-Maria-</p>
        </div>
        <div className='fard'> 
            <p>Fard à joux liquide personnalisé</p><br/>
            <p> Belle découverte ! Ce liquide blush<br/> naturel a totalement conquis mon cœur.<br/> Sa texture légère et sa teinte délicate offrent<br/> un éclat naturel, parfait pour un look frais et lumineux</p>
            <p>-Jasmine-</p>
        </div>
        <div className='rectangle1'></div>
        <h1 className='quality1'>La boutique</h1>
        <div className='Notre-boutique'>
            <div className='cadre1'>
              
                <img src={visage} alt='' className='visage'/>
                <button className="Explorer"onClick={handleClick}>Explorer</button>
                <div className='about-skin'>Produits pour le visage</div>
            </div>
            
            <div className='cadre2'>
                <img src={corps} alt='' className='corps'/>
                <button className="Explorer"onClick={handleClick}>Explorer</button>
                <div className='about-body'>Produits pour le corps</div>
            </div>
            <div className='cadre3'>
                <img src={cheveux} alt='' className='cheveux'/>
                <button className="Explorer"onClick={handleClick}>Explorer</button>
                <div className='about-hair'>Produits pour les cheveux</div>
            </div>
        </div>
        <div className='rectangle2'></div>
        <h1 className='quality2'>Elles parlent de nous</h1>
        <Temoignages />
        <div className='rectangle1'></div>
        <h1 className='quality1'>Infolettre</h1>
        
        
    </div>
    
  );
}

export default App;
