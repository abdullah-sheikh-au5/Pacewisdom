export function setEmail(data){
    return{
        type: "setEmail",
        payLoad: data
    }
}
export function setPassword(data){
    return{
        type: "setPassword",
        payLoad: data
    }
}
export function setConfirmPassword(data){
    return{
        type: "setConfirmPassword",
        payLoad: data
    }
}
export function createUser(email,password){
    return{
        type: "createUser",
        payLoad: {email,password}
    }
}
export function checkUser(email,password,users){
    let data = users.filter((elem)=> elem.email === email && elem.password === password)
    console.log(data)
    if(data.length>0){
       let toDoList = data[0].toDoList
        return{
            type: "checkUser",
            payLoad: {email,password,toDoList,login:true}
        }
    }else{
        return{
            type: "checkUser",
            payLoad: {email:'',password:'',toDoList:[],login:false}
        }
    }

}
export function setUserData(data){
    return{
        type: "setUserData",
        payLoad: data
    }
}


export function setTitle(data){
    return{
        type: "setTitle",
        payLoad: data
    }
}
export function setDeadline(data){
    return{
        type: "setDeadline",
        payLoad: data
    }
}
export function addListItem(data){
    return{
        type: "addListItem",
        payLoad: data
    }
}
export function setDropdownState(data){
    return{
        type: "setDropdownState",
        payLoad: data
    }
}
export function removeListItem(data){
    return{
        type: "removeListItem",
        payLoad: data
    }
}
export function editListItem(data){
    return{
        type: "editListItem",
        payLoad: data
    }
}
export function isCompleted(data){
    return{
        type: "isCompleted",
        payLoad: data
    }
}