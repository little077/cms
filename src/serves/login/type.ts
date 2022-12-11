

interface ILogin{
    name:string,
    password:any
}
interface ILoginData{
  id:number,
  name:string,
  token:string
}
interface IDataType<T =any>{
    code:number,
    data:T
}
export {ILogin ,IDataType , ILoginData}