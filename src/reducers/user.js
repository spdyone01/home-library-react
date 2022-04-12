// User reducer

const userReducerDefaultState = {}; 

// UPDATE_USER
// LOGOUT_USER

/***************************************************************************************
 * 
 *     In UPDATE_USER do I need to return action.username or username?  Look into this
 * 
 **************************************************************************************/

export default (state = userReducerDefaultState, action) => {
    switch(action.type) {
        case 'UPDATE_USER':
            return {
                // username,
                // email
            };
        case 'LOGOUT_USER':
            return {};
        default: 
            return state;
    }
}