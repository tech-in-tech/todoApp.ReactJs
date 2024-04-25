import { createContext,useContext } from "react";


export const TodoContext = createContext({
  todos:[
    {
      id:1,
      todo:"todo msg",
      complete:false,
    }
  ],

  addTodo:(todo)=>{},
  updateTodo:(id,todo)=>{},
  deleteTodo:(id)=>{},
  tggleComplete:(id)=>{}


});


export const useTodo = () => {
  return useContext(TodoContext);
}


export const Todoprovider = TodoContext.Provider


