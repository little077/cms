class Cache{
  getLocalStorage(name:string){
    const value =localStorage.getItem(name)
    if(value){
        return JSON.parse(value)
    }
  }
  setLocalStorage(name:string,value:any){
    localStorage.setItem(name,JSON.stringify(value))
  }
  deleteLOcalStorage(name:string){
    localStorage.removeItem(name)
  }
  clearLocalStorage(){
    localStorage.clear()
  }
}


export default new Cache()