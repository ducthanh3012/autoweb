var colors = ["orange","red","green","blue","pink","black"];
var i=0;
function click1(){
    var box=document.getElementById("box");
    i++;
    box.style.backgroundColor = colors[i%6];
}

function hover1(e){
    //var box=document.getElementById("box");
    e.style.backgroundColor="black";
    e.style.opacity = "0.5";
}
function hover2(e){
    //var box=document.getElementById("box");
    e.style.backgroundColor="white";
}
function key1(e){
    var v=e.value; //thuộc tính lấy giá trị của Input
    console.log(v);
}
function key2(e){
    var v=e.value; //thuộc tính lấy giá trị của Input
    //console.log(v);
    var k=event.keyCode; //mã bàn phím
    if(k==13){
        console.log(v);
    }
    console.log(k);
}
function key3(e){
    var v=e.value; //thuộc tính lấy giá trị của Input
    console.log(v);
}
function cop1(e){
    console.log("copy");
}
function change1(e){
    var v=e.value;
    console.log(v);
}
