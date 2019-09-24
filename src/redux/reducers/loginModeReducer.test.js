//UNIT TEST A FUNCTION

import loginModeReducer from './loginModeReducer';


describe('loginModeReducer states', () => {
    test('should have its correct initial state', () => {
        let action = {};
        let newState = loginModeReducer(undefined, action);
        expect(newState).toEqual('login');
    })
    test('should return the state with string register', () => {
        let action = { type: 'SET_TO_REGISTER_MODE'};
        let newState = loginModeReducer(undefined, action);
        expect(newState).toEqual('register');
    })
}) 

