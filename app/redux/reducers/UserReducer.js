const initialState = {
    loginstatus: 0, // -1 default, 0: false, 1: success 
    userid:'',
    user_info:null,
    cashback: 0
};

//set state
export default function userReducer(state = initialState,action){
    switch(action.type){
        case "login":
            //call api validate userid
            //
            //dev
            if(action.payload === "congdzai"){
                return {
                    loginstatus:1,
                    userid:action.payload
                };
            }
            else{
                return {
                    loginstatus:0,
                    userid:action.payload
                };
            }
            //
        case 'logout':
            return {
                loginstatus:-1,
                userid:action.payload
            };
        default:
            return {
                loginstatus:-1,
                userid:action.payload
            };
    }
}