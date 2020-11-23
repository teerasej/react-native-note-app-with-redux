import { combineReducers } from 'redux'
import noteReducer from './note.reducer';
import { reducer as formReducer } from 'redux-form';

export default () => combineReducers({
  note: noteReducer,
  form: formReducer
})  