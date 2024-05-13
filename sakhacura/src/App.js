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
import card from './images/card.png';
import message from './images/message.png';
import communication from './images/communication.png';
import instagram from './images/instagram.png';
import pinterest from './images/pinterest.png';
import tiktok from './images/tiktok.png';
import facebook from './images/facebook.png';
import google from './images/google.png';
import jcb from './images/jcb.png';
import Applepay from './images/Applepay.png';
import visa from './images/visa.png';
import  mastercard from './images/mastercard.png';
import circeld from './images/circeld.png';
import paypal from './images/paypal.png';
import login from './images/login.png';
import panier from './images/panier.png';
const App=()=>{

    const handleClick = () => {
        console.log('Le bouton a été cliqué !');
    };
   
    const handleAddtoCartClick =()=>{

    };
    const handleLoginClick =()=>{

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
                <div className='test'>Diagnostic</div>
                <div className='la-marque'>La marque</div>
                <button onClick={handleLoginClick} className='login'>
                    <img src={login} alt='' className='connecter'/>
                </button>
                <button onClick={handleAddtoCartClick} className='panier'>
                    <img src={panier} alt=''className='addtocart'/>
                </button>
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
                <p className='parag'>Sérum  hydratant personnalisé</p><br/>
                <p className='parag'>J'adore mon sérum personnalisé!<br/> La texture est parfaite et je vois <br/>déjà les résultats après seulement<br/> quelques semaines d'utilisation.<br/> L'odeur est également merveilleuse! <br/>Un gros coup de coeur!</p>
                <p className='parag'>-Sarah-</p>
            </div>
            <div className='deodorant'> 
                <p className='parag'>Déodorant personnalisé</p><br/>
                <p className='parag'> La texture est légère, l'odeur discrète<br/> et agréable, et surtout, il offre une protection<br/> efficace tout au long de la journée. J'apprécie vraiment de savoir que je n'utilise que<br/> des ingrédients naturels</p>
                <p className='parag'>-Maria-</p>
            </div>
            <div className='fard'> 
                <p className='parag'>Fard à joux liquide personnalisé</p><br/>
                <p className='parag'> Belle découverte ! Ce liquide blush<br/> naturel a totalement conquis mon cœur.<br/> Sa texture légère et sa teinte délicate offrent<br/> un éclat naturel, parfait pour un look frais et lumineux</p>
                <p className='parag'>-Jasmine-</p>
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

            <div className='rectangle3'></div>
            <h1 className='quality3'>Infolettre</h1>

            <div className='promotion'>
                <p className="centered-paragraph">
                    Inscris-toi à l'infolettre de SakhaCura pour rester informé(e) de nos
                </p>
                <p className="centered-paragraph">
                    promotions et nos nouveautés.
                </p>
                <p className="centered-paragraph">
                    Obtiens 15% de rabais sur ta première commande
                </p>
                <p className="centered-paragraph">
                    et un E-book gratuit qui contient des trucs et astuces pour une belle peau!
                </p>
            </div>
            <div id="a-contact" className='section-contact'>
                <div className='group'>
                    <input type='text'placeholder='Prénom' name='prénom'/>       
                </div>
                <div className='group'>
                    <input type='email'placeholder='E-mail' name='mail'/>       
                </div>
                <div className='group4'>
                    <input type='tel'placeholder='Date anniversaire' name='numéro'/>        
                </div> 
                <button type='submit' className='mores'>M'abonner</button>               
            </div>
            <div className='dernier'>
                <div className='entourage'>
                    <img src={card} alt='' className='card'/>
                    <div className='carte'>Paiement sécurisé <p className='sana'>par carte bancaire et paypal</p></div>
                    <img src={communication} alt='' className='communication'/>
                    <div className='com'>Customer Happiness Manager <p className='sana'> toujours à votre écoute</p></div>
                    <img src={message} alt='' className='message'/>
                    <div className='mes'> Livraison offerte en point relais<p className='sana'> à partir de 300 DHS d'achat</p></div>

                </div>
                <div>
                    <h1 className='sakhacura'>SC</h1>
                    <p className='sm'>Suis-Nous Sur Nos Réseaux Sociaux!</p>
                </div>
                <div className='network'>
                    <img src={instagram} alt='' className='instagram'/>
                    <img src={tiktok} alt='' className='tiktok'/>
                    <img src={facebook} alt='' className='facebook'/>
                    <img src={pinterest} alt='' className='pinterest'/>
                </div>
                <img src={circeld} alt='' className='circeld'/>
                <div className='ou'>2023 SAKHACURA. Tous Droits Réservés.</div>
                <h2 className='information'>Infos</h2>
                <div className='aboutinfo'>
                    <div className='a'>Programme ambassadeur</div>
                    <div className='b'>FAQ</div>
                    <div className='c'>Où nous trouver?</div>
                    <div className='d'>Nous rejoindre</div>
                </div>

                <div className='payement'>
                    <img src={Applepay} alt='' className='Applepay'/>
                    <img src={jcb} alt='' className='jcb'/>
                    <img src={visa} alt='' className='visa'/>
                    <img src={mastercard} alt='' className='mastercard'/>
                    <img src={google} alt='' className='google'/>
                    <img src={paypal} alt='' className='paypal'/>
                </div>
            </div>
        </div>
    );
}

export default App;
