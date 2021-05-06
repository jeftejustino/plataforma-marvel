import { createStore, compose, applyMiddleware, Reducer } from 'redux';

const constCreateStore: any = (reducers: Reducer, middlewares: any) => {
  const enhancer: any =
    process.env.NODE_ENV === 'development'
      ? compose(console.tron.createEnhancer(), applyMiddleware(...middlewares))
      : applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};

export default constCreateStore;
