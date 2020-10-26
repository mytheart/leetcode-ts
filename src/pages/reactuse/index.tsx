import { useWindowSize, useBattery } from 'react-use';

const Demo = () => {
  const { width, height } = useWindowSize();
  const state = useBattery();

  return (
    <div>
      {JSON.stringify(state, null, 2)}
      <div>width: {width}</div>
      <div>height: {height}</div>
    </div>
  );
};

export default Demo;
