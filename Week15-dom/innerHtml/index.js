function createDropdownSelect(array, domNode) {
    var select = document.createElement('select');
    for (var i = 0; i < array.length; i++){
        // var option = document.createElement('option');
        // option.textContent = array[i];
        // select.appendChild(option);
       select.innerHTML += "<option>" + array[i] + "</option>";
     
       
    }
    var body = document.querySelector('body');
    var node = document.createElement(domNode);
    body.prepend(node);
   node.appendChild(select);
}

var array = ['Mail', 'Home', 'Next'];
var array1 = ['JS', 'Java', 'C++'];
createDropdownSelect(array1, 'div');
createDropdownSelect(array, 'div');