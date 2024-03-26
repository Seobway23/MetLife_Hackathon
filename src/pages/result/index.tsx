import { useRecoilValue } from 'recoil';
import { insuranceProductState } from '@/atom/response';
import DiseaseResult from './components/DiseaseResult';
import LifeResult from './components/LifeResult';

export default function Result() {
  const data = useRecoilValue(insuranceProductState);

  return <DiseaseResult />;
}
