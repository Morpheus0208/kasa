/**
 * ✅ JSDoc : description du composant
 * Ce composant affiche la page Fiche Logement pour chaque logement.
 */
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import LogementCollapse from '../components/LogementCollapse';
import LogementInfo from '../components/LogementInfo';
import Slider from '../components/Slider';
import { useData } from '../Context/DataProvider';
import Main from '../layout/Main';

export default function FicheLogement() {
  const { id } = useParams();

  const { logements } = useData();

  const navigate = useNavigate();
  const logement = logements.find((item) => item.id === id);
  useEffect(() => {
    if (!logement) {
      navigate('/error');
    }
  }, [logement, navigate]);
  if (!logement) return null;
  return (
    <div>
      <Main>
        <Slider images={logement.pictures} titre={logement.title} />
        <LogementInfo logement={logement} />
        <LogementCollapse description={logement.description} equipments={logement.equipments} />
      </Main>
    </div>
  );
}
