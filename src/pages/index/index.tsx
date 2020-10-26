import React, { useEffect, memo, useState, useCallback, useMemo } from 'react';
import { useReactive } from 'proxy-hooks';

const Demo = () => {
  const [state] = useReactive({ n: 10 });

  const [count, setCount] = useState(0);

  const [loading, setLoading] = useState(false);

  const [params, setParams] = useState({ a: 0 });

  const [data, setData] = useState([]);

  const dobuleCount = useMemo(() => count * 2, [count]);

  console.log('render', count, loading, data, params);

  useEffect(() => {
    (async () => {
      setLoading(true);

      const res = await getData(params);

      setLoading(false);

      setData(res);
    })();
  }, [params]);

  const onAddCount = useCallback(() => {
    // setCount((count) => count + 1)

    setCount(count => count + 1);

    if (count + 1 >= 4) {
      console.log('>=4', count + 1);
    } else {
      console.log('<4', count + 1);
    }

    // setTimeout(() => {
    //   setCount((count) => count + 1)

    //   setCount((count) =>count + 1)
    // }, 1000)
  }, [count]);

  const onChangeLoading = useCallback(() => {
    // setCount((count) => count + 1)

    // setLoading(!loading)

    setTimeout(() => {
      setCount(count => count + 1);

      console.log(count);

      setLoading(!loading);
      console.log(loading);
    }, 1000);
  }, [loading]);

  const onChangeParams = useCallback(() => {
    // setCount(n+10)
    // setParams({a: params.a+1})

    setTimeout(() => {
      // setCount(n+10)
      console.log('setCount', n);
      setParams({ a: params.a + 1 });
      console.log('setParams', params);
    }, 10);
  }, [params]);

  const onAddN = useCallback(() => {
    state.n++;

    console.log(state.n);
  }, [n]);

  return (
    <div>
      <p>n: {state.n}</p>

      <p>count: {count}</p>

      <p>dobuleCount: {dobuleCount}</p>

      <p>loading: {loading ? 'loading' : 'completed'}</p>

      <p>data: {data}</p>

      <button onClick={onAddN}>N++</button>

      <button onClick={onAddCount}>count++</button>

      <button onClick={onChangeLoading}>changeLoading</button>

      <button onClick={onChangeParams}>changeParams</button>
    </div>
  );
};

export default memo(Demo);

const originData = [];
let n = 0;
function getData(params) {
  originData.push(n);
  n++;
  return new Promise((res, rej) => {
    setTimeout(() => {
      res([...originData]);
    }, 1500);
  });
}
