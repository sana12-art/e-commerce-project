import React from 'react';

const Temoignages = () => {
  const temoignages = [
    {
      id: 1,
      nom: 'Nora Amari',
      produit: 'Démaquillant Naturel',
      commentaire: "Je l'ai acheté il y a un mois et il fait désormais partie intégrante de mon quotidien. Démaquillebien pour moi. Je recommande à 100 000%"
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

  return (
    <div className="temoignages-container">
      {temoignages.map(temoignage => (
        <div key={temoignage.id} className="temoignage">
          <h3>{temoignage.nom}</h3>
          <p><strong>Produit :</strong> {temoignage.produit}</p>
          <p>{temoignage.commentaire}</p>
        </div>
      ))}
    </div>
  );
}

export default Temoignages;
