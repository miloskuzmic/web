function HelloWorld(){
    return console.log('Hello World Hello World');
    }
    HelloWorld();
function printInformation(){
    var platform = window.navigator.platform;
    var appVersion = window.navigator.appVersion;
    var appName = window.navigator.appName;
    var output = platform + '\n ' + appVersion + '\n' + appName;
    return console.log(output);
};
printInformation();

function isOnline(){
    return (window.navigator.onLine) ? console.log('online') : console.log('offline');
};
isOnline();
console.log("=========window.screen===========");
function scrennInformation() {
    var browesrHeight = window.screen.availHeight;
    var browesrWidth = window.screen.availWidth;
    var maxHeight = window.screen.height;
    var output = browesrHeight + '\n' + browesrWidth + '\n' + maxHeight;
    return console.log(output);
}
scrennInformation();
console.log("===========window.location============");

function windowLocation() {
    var fullUrlAddres = window.location.href;
    var domainName = window.location.host;
    var usedProtocol = window.location.protocol;
    var parametersOfUrl = window.location.search;
    var output = 'full url address ' + fullUrlAddres + '\n' + 'domain name ' + domainName + '\n' + 'used protocol ' + usedProtocol + '\n' + 'parameters which are part of URL ' + parametersOfUrl;
    return console.log(output);
}
/*windowLocation();
function reloadPage() {
    location.reload();
}
reloadPage();
function redirect(){
    var location = "https://www.google.com";
    window.location.href = location ;
}
redirect();
function passedData() {
    window.localStorage.setItem('lastname', 'Prezime');
}
passedData()
function readData(){
 var key = localStorage.getItem('lastname');
 if (!key){
     return console.log('There is no data')
 }
 return console.log(key);
}
readData();
function removeData() {
    localStorage.removeItem('lastname');
}
removeData()
readData();*/
function passedData() {
    window.sessionStorage.setItem('lastname', 'Prezime');
}
passedData()
function readData(){
 var key = sessionStorage.getItem('lastname');
 if (!key){
     return console.log('There is no data')
 }
 return console.log(key);
}
readData();
function removeData() {
    sessionStorage.removeItem('lastname');
}
removeData()
readData();
//widows.history

