const initialState = {
    recomendHotels:[]
};

export default function homeReducer(state = initialState,action){
    switch (action.type){
case "recomend":
    return {
        recomendHotels:action.payload
    }
    }
    return state;
}