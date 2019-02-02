/********** Imports **********/
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import currentVideo from './currentVideo/reducer';
import filters from './filters/reducer';
import videos from './videos/reducer';

/********** Store **********/

export const combinedReducers = { currentVideo, filters, videos };
const store = createStore(
  combineReducers(combinedReducers),
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
