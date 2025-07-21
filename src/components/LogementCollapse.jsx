import PropTypes from 'prop-types';
import '../styles/components/_logement-collapse.scss';
import Collapse from './Collapse';

export default function LogementCollapse({ description, equipments }) {
  return (
    <div className="logement__collapse">
      <div className="logement__collapse-item">
        <Collapse title="Description" content={description} />
      </div>
      <div className="logement__collapse-item">
        <Collapse title="Équipements" content={equipments} />
      </div>
    </div>
  );
}

LogementCollapse.propTypes = {
  description: PropTypes.string.isRequired,
  equipments: PropTypes.arrayOf(PropTypes.string).isRequired,
};
