import { Bars } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Bars
      height="80"
      width="80"
      color="#9e4fc5"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loader;
