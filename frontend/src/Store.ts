import { createStore } from 'redux'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
const initialState = {
    loggedIn: false
}

const reducer = (state = initialState, action:any) => {
 console.log('in reducer now',action);
    if (action.type === 'LOGIN_SUCCESS') {
    state.loggedIn = true;
  } else if(action.type === 'LOGOUT') state.loggedIn = false;
  return state
}

const store = createStore(reducer)

export default store

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;