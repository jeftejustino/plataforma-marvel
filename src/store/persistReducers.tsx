import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const reducers: any = (reducer: any) => {
  const persistedReducer = persistReducer(
    {
      key: 'plataforma-marvel',
      storage,
      whitelist: ['auth', 'user'],
    },
    reducer,
  );

  return persistedReducer;
};

export default reducers;
