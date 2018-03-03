let helpers = (function () {
  
  function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }


  function newTodo(attrs = {}) {
    const todo = {
      title: attrs.title || 'Todo',
      priority: attrs.priority || 'Priority',
      id: guid(),
    };
    return todo;
  }

  return {
    newTodo,
    guid,
  };
}());


export default helpers;