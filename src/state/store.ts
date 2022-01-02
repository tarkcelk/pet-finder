import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';

const middleware = [];
middleware.push(thunk);

if (process.env.NODE_ENV === 'development') {
  middleware.push(createLogger());
}

const store = createStore(reducers, applyMiddleware(...middleware));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {store};
