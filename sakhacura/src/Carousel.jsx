import React, { useState, useEffect, useCallback } from 'react';
import { CarouselItem } from './CarouselItem';

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: 'mytoner',
      icon: require('./photos/toner.jpg'),
      buttonText: 'Faire mon diagnostic',
    },
    {
      title: 'myprimer',
      icon: require('./photos/primer.jpg'),
      buttonText: 'Faire mon diagnostic',

    },
  ];

  // Fonction pour mettre à jour l'index actif
  const updateIndex =  useCallback((newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }
    setActiveIndex(newIndex);
  },[items.length]);

  // Effet pour faire défiler automatiquement les images
  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(activeIndex + 1); // Passer à l'image suivante
    }, 3000); // Intervalle de 3 secondes entre chaque changement d'image

    // Nettoyer l'intervalle lors du démontage du composant
    return () => clearInterval(interval);
  }, [activeIndex,updateIndex]); 
        return (
            <div className='carousel'>
                <div
                    className='inner'
                    style={{ transform: `translate(-${activeIndex * 100}%)` }}
                >
                    {items.map((item, index) => {
                    return <CarouselItem key={index} item={item} width={'100%'} />;
                    })}
                </div>
                <div className='carousel-bouttons'>
                    <button onClick={()=>{
                        updateIndex(activeIndex - 1);
                        }}
                        className='button-arrow'
                        >
                        <span className="material-symbols-outlined">arrow_back_ios</span>
                    </button>
                        <div className='indicators'>
                                {items.map((item,index)=>{
                                return(
                            <button onClick={()=>{
                                updateIndex(index);
                                }}
                                className='indicator-buttons'> 
                                <span className={`material-symbols-outlined ${index===activeIndex
                                ? "indicator-symbol-active"
                                : "indicator-symbol"}`}>radio_button_checked</span> 
                            </button>  
                            )
                            })}
                        </div>
                    <button onClick={()=>{
                        updateIndex(activeIndex + 1);
                        }}
                        className='button-arrow'>
                        <span className="material-symbols-outlined">arrow_forward_ios</span>
                    </button>
                </div>
            </div>
        
        );
};

export default Carousel;
