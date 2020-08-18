const LoginAction = (data)=>{
    return {
        type:'login',
        payload: data
    }
}
const LogoutAction = ()=>{
    return {
        type:'logout',
        payload: ""
    }
}
export {LoginAction,LogoutAction};