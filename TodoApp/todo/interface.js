var Shopping = /** @class */ (function () {
    function Shopping(items) {
        this.items = items;
    }
    Shopping.prototype.add = function (list) {
        this.items.push(list.item);
    };
    Shopping.prototype.display = function () {
        return (this.items);
    };
    return Shopping;
}());
var list = new Shopping([]);
function addItem(item) {
    list.add({
        item: item
    });
}
function displayItem() {
    return list.display();
}
function deleteItemFromList(item) {
    var index = displayItem().indexOf(item);
    displayItem().splice(index, 1);
}
