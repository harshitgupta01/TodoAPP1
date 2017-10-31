window.onload
{
    var input = document.getElementById("todo_element");
    var btn = document.getElementById("btn");
    var dis = document.getElementById('display_list');
    var i = 0 ;
    var k = 0;
    btn.onclick = function () {
        var value = input.value;
        console.log(value);
        addItem(value);
        var list = displayItem();
        console.log(list);
        for(j=k;j<list.length;j++) {
            var element = document.createElement('div');
            element.id = value + i;
            console.log(element.id);
            element.innerHTML = "<div class ='entered_todo' id=" + value + i + "1" + ">" + value + "</div>" +
                "<button class='button10' onclick='complete(this.id)' id=" + value + i + ">Complete</button>"
                + "<button class='button1' onclick = 'del_item(this.id)' id=" + value + i + ">Delete</button>" +
                "<button class='button1' onclick='update_value(this.id)' id=" + value + i + ">Update</button>";
            i++;
            k++;
            dis.appendChild(element);
        }
    }

    function del_item(id) {
        deleteItemFromList(id);
        var element = document.getElementById(id);
        console.log(element);
        dis.removeChild(element);
        k--;
    }

    function update_value(id) {
        var person = prompt("Please enter your name:", "New Value");
        var element = document.getElementById(id+"1");
        if (person == null || person == "") {

        } else {
            element.innerText = person;
        }
    }

    function complete(id){
        var element = document.getElementById(id+"1");
        element.style.color = "white";
        element.style.backgroundColor = "green"
    }
}