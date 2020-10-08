function fadeout(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}


function copy() {
    var copyText = document.getElementById("output");
    var copiedMsg = document.getElementById("copied-message");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    copiedMsg.style = "visibility: visible;"
    fadeout(copiedMsg)
}