const initialState = {
    keyword:""
};

export default function searchReducer(state = initialState,action){
    switch (action.type){
case "add":
    return {
        keyword:action.payload
    }
    }
    return state;
}