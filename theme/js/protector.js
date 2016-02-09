
function getElementsByClassName(node, classname) {
    if (node.getElementsByClassName) {
        // если есть стандартная, костыли не используем
        return node.getElementsByClassName(classname);
    } else {
        var testClass = new RegExp("(^|\\s)" + className + "(\\s|$)");
        var elements = node.all ? node.all : node.getElementsByTagName("*");
        var returnElements = [];
        var current;
        var length = elements.length;
        for (var i = 0; i < length; i++) {
            current = elements[i];
            if (testClass.test(current.className)) {
                returnElements.push(current);
            }
        }
        return returnElements;
    }
}

function protect_(){
var parts = ["ulum", "tri", 64, "ang", 46, "il", "com", "gma", "soft"];
var v = document.getElementById("protect");
var ns = getElementsByClassName(document, "protect");

var paranoia =  parts[1] + parts[3] + parts[0] + parts[8] + String.fromCharCode(parts[2]) + parts[7] + parts[5] + String.fromCharCode(parts[4]) + parts[6];

var txt =  "<a href='mailto:" + paranoia + "'>" + paranoia + "</a>";

for (var i = 0; i < ns.length; i++) {
    ns[i].innerHTML = txt;
}

var elems = v.getElementsByTagName('*');
for (var i = 0; i < elems.length; i++) {
    v.removeChild(elems[i]);
}

v.innerHTML = txt;

}

window.onload = protect_;

