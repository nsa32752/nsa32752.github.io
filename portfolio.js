var title = "HELLO  \n I AM SEOYEON."
var i=0;
function typing(){
    if(i<title.length-1){
        if(title[i] == '\n') document.getElementById('title').innerHTML += '</br>';
        else document.getElementById('title').innerHTML += title[i];
        i++;
        setTimeout(typing, 100);
    }
    if(i==title.length-1){
        document.getElementById('direction').innerHTML += '&#8744';
        i++;
        setTimeout(typing, 100);
    }   
}

function seemore(i){
    var list = document.getElementsByClassName("more");
    var list2 = document.getElementsByClassName("list");
    // var x = list2[i].positionedOffset().left;
    // var y = list2[i].positionedOffset().top;
    // console.log(x, y);
    for(var j=0; j<list.length; j++){
        if(list[j].style.display != 'none'){
            list[j].style.display = 'none';
        }
    }
    list[i].style.display='inline'
    // if(window.innerWidth<x+570){
    //     list[i].style.left = (window.innerWidth-700)+'px';
    // }
    // else{
    //     list[i].style.left = x+'px';
    // }
    // list[i].style.top = y+'px';
}

function remove(i){
    document.getElementsByClassName("more")[i].style.display = 'none';
}

window.onload = function all(){
    this.typing();


        // console.log(1);
        // $('.more').onmouseover(
        //     $('ac_content'>li).css("border-color","rgb(208, 43, 84)")
        // );
}
