import PropTypes from 'prop-types';
import { useState } from 'react';
import '../styles/components/_collapse.scss';

export default function Collapse({ title, content, className = '' }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${className}`}>
      <button type="button" className="collapse__header" onClick={toggleCollapse}>
        <span className="collapse__title">{title}</span>
        <span className={`collapse__icon ${isOpen ? 'collapse__icon--open' : ''}`}>
          {/* Ici tu peux utiliser une icône font-awesome ou un svg */}▼
        </span>
      </button>
      <div className={`collapse__content ${isOpen ? 'collapse__content--open' : ''}`}>
        {Array.isArray(content) ? (
          <ul>
            {content.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
  className: PropTypes.string,
};

Collapse.defaultProps = {
  className: '',
};
