/**
 * ✅ JSDoc : description du composant
 * Ce composant affiche la  Gallery des logements Kasa.
 */
import React, { useContext } from 'react';
import { DataContext } from '../Context/DataProvider';
import Card from './Card';
import '../styles/components/_Gallery.scss';

export default function Gallery() {
  const { logements } = useContext(DataContext);
  return (
    <section className="gallery">
      {logements.map((logement) => (
        <Card key={logement.id} title={logement.title} cover={logement.cover} />
      ))}
    </section>
  );
}
