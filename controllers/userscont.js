import { v4 as uuidv4 } from 'uuid';

let users=[];
export const getUsers=(req,res)=>{
   
    res.send(users);
}

export const createUser=(req,res)=>{
    const user=req.body;
    const id=uuidv4();
    const userwithId={id:id,...user};

    users.push(userwithId);
    res.send(`The user with name ${user.firstName} is added`);
}
export const findUser=(req,res)=>{
    const {id}=req.params;
    const foundUser=users.find((user)=>user.id===id);
    res.send(foundUser);
}

export const deleteUser=(req,res)=>{
    const {id}=req.params;
    users=users.filter((user)=>user.id!==id);
    res.send(`The user with id:${id} was deleted sucessfully`);
    }

export const updateUser=(req,res)=>{
    const {id}=req.params;
    const{firstName,lastName,age}=req.body;
    const user=users.find((user)=>user.id===id);

    if(firstName)
    {
        user.firstName=firstName;
    }
    if(lastName)
    {
        user.lastName=lastName;
    }
    if(age)
    {
        user.age=age;
    }
    res.send(`User with the id:${id} is updated`);
}