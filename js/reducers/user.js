//@flow
import { createReducer, updateStringProp } from './shared.js';
import * as UserActions from '../actions/user';

export type State = {
  isLoggedIn: boolean;
  hasSkippedLogin: boolean;
  id: ?string;
  fName: ?string;
  lName: ?string;
  email: ?string;
  age: ?int;
}

const initialState = {
  isLoggedIn: false,
  hasSkippedLogin: false,
  id: null,
  fName: null,
  lName: null,
  email: null,
  age: null
}

const users = createReducer([], {
  [UserActions.UPDATE_USER]: updateProp
});