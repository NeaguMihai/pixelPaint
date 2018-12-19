function createRow(a){
    var table = document.getElementById("tableContainer");
    for(var i=0;i<a;i++){
        var row=document.createElement("div");
        var atr = document.createAttribute("id");
        atr.value="row"+i;
        row.setAttributeNode(atr);
        row.classList.add("rows");
        table.appendChild(row);
        createColl(a,i);
        }
    }
function createColl(cNumber, index){
    var row =document.getElementById("row"+index);
    for(var i=0;i<cNumber;i++){
        var col=document.createElement("div");
        var atr = document.createAttribute("id");
        atr.value="col"+i;
        col.setAttributeNode(atr);
        col.classList.add("collum");
        row.appendChild(col);
    }
    function elemid(){

    }
}
    window.onload=function(){
    var rows= 50;
    createRow(rows);
    var colorSw =document.getElementsByClassName("colorPicker");
    console.log(colorSw);
        var atr;
    for(var i=0, len=colorSw.length;i<len;i++){
        colorSw[i].addEventListener('click',function(){
            atr = window.getComputedStyle(this, null).getPropertyValue("background-color");
            console.log(atr);    
        });
    }
    var coloane = document.getElementsByClassName("collum");
    for( var i=0, len=coloane.length;i<len;i++){
        coloane[i].addEventListener('click', function(){
            var elem= this;  
            console.log(typeof(elem)); 

           elem.style.backgroundColor = atr;
            
        })
    }
}