// Search Reducer
/*****************************************************************************************
 * 
 * 
 *          May Be Deprecated in favor of using state in SearchPage component instead.
 * 
 * 
 *******************************************************************************************/

const searchReducerDefaultState = {
    searchQuery: '',
    results: {}
};

export default (state = searchReducerDefaultState, action) => {
    switch(action.type){
        default:
            return state;
    }
}