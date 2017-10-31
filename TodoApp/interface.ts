interface shoppinglist {
    item: string
}

class Shopping {
    public items: string [];

    constructor(items: string []) {
        this.items = items;
    }
    add(list : shoppinglist) {
        this.items.push(list.item);
    }

    display() {
        return (this.items);
    }

}

var list = new Shopping(["apples"]);

function addItem(item: string) {
    list.add({
        item:  item
    });
}

function displayItem() {
    return list.display();
}

function deleteItemFromList(item){
    var index = displayItem().indexOf(item);
    displayItem().splice(index, 1);
}