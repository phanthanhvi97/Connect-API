import * as Types from '../constants/actionTypes'
var initialState={

}
const itemEditing = (state=initialState,action)=>{
    switch(action.type){
        case Types.EDIT_PRODUCT:
            return action.product
        default:
            return state
    }
}
export default itemEditing