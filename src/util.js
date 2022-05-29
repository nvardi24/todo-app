const loadTodos = async ()=>{
    const response = await fetch('http://localhost:4000/get');
    if(!response.ok){
      return "ERROR!!!";
    }
    const responseData = await response.json();
    return responseData.todos;
  };

  const updateTodo = async (updTodo)=>{
    const response = await fetch('http://localhost:4000/update',{
        method:'PATCH',
        headers: { "Content-Type": "application/json" }
        ,body: JSON.stringify(updTodo)
        });
        const responseData = await response.json();
        return responseData.todos;
  };
  const markAllAsCompleted = async ()=>{
    const response = await fetch('http://localhost:4000/mark-all',{
        method:'PATCH'
        });
        const responseData = await response.json();
        return responseData.todos;
  };

  const addTodo = async (todo)=>{
  const response = await fetch('http://localhost:4000/create',{
      method:'POST',
      headers: { "Content-Type": "application/json" }
      ,body: JSON.stringify(todo)
      });
      const responseData = await response.json();
      if(responseData.msg !== 'OK'){
        return responseData;
      }
      else{
          return responseData.todos;
      }
};

const deleteTodo = async (todo)=>{
    const response = await fetch('http://localhost:4000/delete',{
        method:'DELETE',
        headers: { "Content-Type": "application/json" }
        ,body: JSON.stringify(todo)
        });

    const responseData = await response.json();
    return responseData.todos;

  };


  export {loadTodos, updateTodo, addTodo,deleteTodo,markAllAsCompleted};