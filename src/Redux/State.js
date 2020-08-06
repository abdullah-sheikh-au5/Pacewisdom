
let initialState = {
    users:[{email:'qwerty@gmail.com',password:'qwerty',toDoList:[]}],
    user:{email:'',password:'',toDoList:[]},
    listItem:{title:'',deadline:'',isCompleted: false,createdOn: ''},
    editListItem : '',
    login:false,
    dropdown : "ALL" ,
    email:'',
    password:'',
}


export let appReducer = (state = initialState,action)=>{
    let stateCopy = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case 'setEmail':
            stateCopy.email = action.payLoad
            return stateCopy
        case 'setPassword':
            stateCopy.password = action.payLoad
            return stateCopy
        case 'setConfirmPassword':
            stateCopy.confirmPassword = action.payLoad
            return stateCopy
        case 'createUser':
            let newUser = action.payLoad
            newUser.toDoList = []
            stateCopy.users.push(newUser)
            return stateCopy
        case 'checkUser':
            stateCopy.login = action.payLoad.login
            stateCopy.user.email = action.payLoad.email
            stateCopy.user.password = action.payLoad.password
            stateCopy.user.toDoList = action.payLoad.toDoList
            return stateCopy
        case 'setUserData':
            return setUser(stateCopy,action.payLoad)
        case 'setTitle':
            stateCopy.listItem.title = action.payLoad
            return stateCopy
        case 'setDeadline':
            stateCopy.listItem.deadline = action.payLoad
            return stateCopy
        case 'addListItem':
            return addInputListItem(stateCopy,action.payLoad)
        case 'setDropdownState':
            stateCopy.dropdown = action.payLoad
            return stateCopy
        case 'removeListItem':
            stateCopy.user.toDoList =  stateCopy.user.toDoList.filter((element,index)=> index !== action.payLoad)
            return stateCopy
        case 'editListItem':
            stateCopy.editListItem = action.payLoad
            stateCopy.listItem = stateCopy.user.toDoList[action.payLoad]
            return stateCopy
        case 'isCompleted':
            stateCopy.user.toDoList[action.payLoad].isCompleted = !stateCopy.user.toDoList[action.payLoad].isCompleted
            return stateCopy
        default: 
        return stateCopy
    }
}



const addInputListItem = (state,listItem)=>{
    listItem.isCompleted = false
    listItem.createdOn = new Date().getDate()+'-'+(new Date().getMonth()+1)+'-'+new Date().getFullYear()
    let list= state.user.toDoList.slice()

    if(state.editListItem === ''){
      list.push(listItem)
      state.user.toDoList = list
      state.listItem = {title: '' ,deadline: '' }
      console.log(state)
      return state
    }else{
        list.splice(state.editListItem,1,listItem)
        state.user.toDoList = list
        state.editListItem = ''
        state.listItem = {title: '' ,deadline: '' }
        console.log(state)
        return state
    }
}


const setUser =(state,user)=>{
    let list = state.users.slice()
 for(let i=0;i<list.length;i++){
     if(list[i].email === user.email && list[i].password === user.password){
         state.users.splice(i,1,user)
     }
 }
 state.login = false   
 return state
}