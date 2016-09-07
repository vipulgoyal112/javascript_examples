/*
 * which we print on html, if it encoded then it decodes itself so if we print something on html
 * and pass that encoded string into javascript then decodes iteself and pass decoded string 
 * into function which cause a problem
 */

function f1 (_url) {
    console.log("_url : " + _url);
    console.log(encodeURIComponent(_url));
    console.log("$$" + encodeURIComponent("BP &quot; GAS"));
}


function escapeSingleDoubleQuotes (val) {
	return val.replace(/\'/g, '\\\'').replace(/\"/g,"\\\"");
}