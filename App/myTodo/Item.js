class Item {
    constructor() {
        this.title = "",
        this.description = "",
        this.creationDate = null,
        this.doneDate = null,
        this.dueDate = null,
        this.category = "",
        this.behaviour = behaviour.REMINDLATER,
        this.repeat = true
    };
}

const behaviour = {
    REMINDLATER: 'remindlater', // einfach später neu erinnern
    STACK: 'stack', // Kopie anlegen
}