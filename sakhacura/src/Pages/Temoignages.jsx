import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importation des icônes de flèche de la bibliothèque react-icons




const Temoignages = () => {
  const temoignages = [
    {
      id: 1,
      nom: 'Nora Amari',
      produit: 'Démaquillant Naturel',
      commentaire: "Je l'ai acheté il y a un mois et il fait désormais partie intégrante de mon quotidien. Démaquillebien pour moi. Je recommande à 100 000%"
    },
    {
      id: 2,
      nom: 'Lina Mojahid',
      produit: 'Crème de nuit',
      commentaire: "près avoir utilisé ce produit pendant quelques semaines, ma peau semble plus hydratée, plus lumineuse et plus lisse.Je recommande!"
    },
    {
      id: 3,
      nom: 'Mona Benjloun',
      produit: 'Sérum-cheveux',
      commentaire: "Ce sérum de cheveux personnalisé a transformé ma routine capillaire. Mes cheveux sont plus forts, plus brillants et plus faciles à coiffer. Je ne peux plus m'en passer!"
    }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? temoignages.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === temoignages.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    
    <div className="temoignages-container">
      {temoignages.map((temoignage, index)=> (
        <div key={temoignage.id} className="temoignage"style={{display: index=== currentIndex ? 'block': 'none'}}>
          <h3>{temoignage.nom}</h3>
          <p><strong>Produit :</strong> {temoignage.produit}</p>
          <p>{temoignage.commentaire}</p>
        </div>
      ))}
        <div className='buttons-container'>
            <button onClick={handlePrevious}className="arrow-button"><FaChevronLeft/></button>
            <button onClick={handleNext}className="arrow-button"><FaChevronRight/></button>
      </div>
    </div>
  );
}

export default Temoignages;
