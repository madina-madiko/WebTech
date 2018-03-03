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
  
  function newContact(attrs = {}){
    const contact = {
      full_name: attrs.full_name || 'Name',
      phone: attrs.phone || 'Phone',
      id: guid(),
    };
    return contact;
  }

  return {
    newTodo,
    guid,
    newContact,
  };
}());


export default helpers;