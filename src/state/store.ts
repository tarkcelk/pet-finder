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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export {store};
