class Item {
    constructor() {
        //console.log("constructor geht los:")
        this.title = "",
        this.done = false,
        this.description = "",
        this.creationDate = null,
        this.doneDate = null,
        this.dueDate = new Date(),
        this.hasDueDate = false,
        this.category = "",
        this.behaviour = behaviour.REMINDLATER,
        this.repeat = true
        //console.log(this);
    };
}

const behaviour = {
    REMINDLATER: 'remindlater', // einfach später neu erinnern
    STACK: 'stack', // Kopie anlegen
}

export default Item;