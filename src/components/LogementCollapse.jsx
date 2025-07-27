/**
 * ✅ JSDoc : description du composant
 * Ce composant affiche le contenu dans le collapse  de la page info logement
 */
import PropTypes from 'prop-types';
import '../styles/components/_logement-collapse.scss';
import Collapse from './Collapse';

export default function LogementCollapse({ description, equipments }) {
  const items = [
    { id: 'desc', title: 'Description', content: description },
    { id: 'equip', title: 'Équipements', content: equipments },
  ];
  return (
    <div className="logement__collapse">
      {items.map((item) => (
        <div key={item.id} className="logement__collapse-item">
          <Collapse title={item.title} content={item.content} className="collapse--logement" />
        </div>
      ))}
    </div>
  );
}

LogementCollapse.propTypes = {
  description: PropTypes.string.isRequired,
  equipments: PropTypes.arrayOf(PropTypes.string).isRequired,
};
