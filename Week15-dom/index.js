// function selectList() {
//     document.getElementById("second-list").style.backgroundColor = "lightblue";
   
// }
// selectList();

// // function selectAllLi(selec, cssName) {
// //       var element = document.querySelectorAll(selec);
// //       for (var i = 0; i < element.length; i++) {
// //         element[i].className = cssName;
// //       }
     
// // }
// // selectAllLi("li", "mystyle");

function thirdUlList() {
    var lastUl = document.querySelector("ul").nextElementSibling.nextElementSibling;
    var allLi = lastUl.querySelectorAll('li');
    for (var i = 0; i < allLi.length; i++){
        allLi[i].className = 'third-li';
    }
}
thirdUlList();


///TRAVERSING///
// function bgColor() {
//     var list = document.querySelector('div').nextElementSibling.firstElementChild.firstElementChild;
//     list.className = "active";
// }
// bgColor()
// function removeClass() {
//     var classRemove = document.getElementsByClassName('active');
//     classRemove[0].classList.remove('active');
// }
// removeClass();
// function addClass() {
//     var firstLi = document.querySelector('div').firstElementChild.firstElementChild;
//     firstLi.className = "active";
// }
// addClass();

// /// ACCESS / UPDATE TEXT NODE /////
// function alertText() {
//     alert(document.getElementsByTagName('ul')[0].childNodes[1].textContent);
// }
// alertText();

// function selectAndReplace(text) {
//     var x = document.querySelector('ul').lastElementChild;
//     x.textContent = text;
// }
// selectAndReplace('No more page')