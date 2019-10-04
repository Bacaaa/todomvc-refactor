export const objLocalStorage = {
    set: function(namespace, data){
        return localStorage.setItem(namespace, JSON.stringify(data));
    },
    get: function(namespace){
        var store = localStorage.getItem(namespace);
        return (store && JSON.parse(store)) || [];
    },
    destroy: function(){
        this.todos.splice(this.indexFromEl(e.target), 1)
        this.render()
    }
}