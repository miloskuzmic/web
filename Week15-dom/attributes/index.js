function validation() {
    var input = document.getElementsByTagName('input');
    console.log(input);
    for (var i = 0; i < input.length; i++) {
        if (input[i].required && input[i].value === '') {
            input[i].className = 'red'
        }
    }
}
validation()