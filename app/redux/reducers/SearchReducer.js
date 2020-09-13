const initialState = {
    keyword:"",
    searching:false
};

export default function searchReducer(state = initialState,action){
    switch (action.type){
case "add":
    return {
        keyword:action.payload.keyword,
        searching: action.payload.searching
    }
    }
    return state;
}