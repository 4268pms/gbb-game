/*
    공통함수들을 모아놓음
*/
function tv(str){    // var str; var str = "고양이";
    var screenString = screenMessageBox.value;
    screenString = screenString + str;
    screenMessageBox.value = screenString;
}
function tvPlayerInfo(str){
    var screenString = screenPlayerInfo.value;
    screenString = screenString + str;
    // screenPlayerInfo.value = screenString;
    screenPlayerInfo.value = str;
}
function tvGameObject(str){
    var screenString = screenGameObject.value
    screenString = screenString + str;
    screenGameObject.value = str;
}

function br(){
    document.write("<br>");
}
function hr(){
    document.write("<hr>");
}

