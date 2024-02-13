import { ClipLoader } from 'react-spinners';

const override = {
  display: 'block',
  margin: '150px auto',
  borderColor: 'green',
};

const Loader = () => {
  return (
    <ClipLoader
      color={'white'}
      loading={true}
      cssOverride={override}
      size={150}
    />
  );
};

export default Loader;
