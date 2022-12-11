import LRequest from "../index"
import {ILogin ,ILoginData ,IDataType} from "./type"
enum Url {
    Login = "/login",
    InfoById = "/users/",
    UserMenu = "/role/"
}
export function login(data:ILogin){
    return LRequest.request<IDataType<ILoginData>>({
        method:"post",
        url:Url.Login,
        data
    })
}

export function getInfoById(id:number){
    return LRequest.request<IDataType>({
        url:Url.InfoById + id,
    })
}

export function getUserMenu(id:number){
    return LRequest.request<IDataType>({
        url:Url.UserMenu + id + "/menu",
    })
}