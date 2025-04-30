import { UseContext } from '../../context/PupContext';

const PupImage = () => {
  const { puppyType } = UseContext();

  return (
    <img src={puppyType} alt="pup" />
  );
};
export default PupImage;