class Command{
    constructor(action, category){
        if(typeof(action)!="function") throw "action is not a Callback function";
        this.action = action; 
        this.category = category;
    }
}

const CommandCategories={
    None:0,
    PlayerShip:1<<0,
}

class CommandQueue{
    constructor(){
        this.queue = [];
    }

    push(command){this.queue.push(command)}
    pop(){return this.queue.pop()}
    isEmpty(){return this.queue.length==0;}
}

export {
    Command as Command,
    CommandCategories as CommandCategories,
    CommandQueue as CommandQueue
}