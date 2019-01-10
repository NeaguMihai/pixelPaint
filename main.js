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
}
    window.onload=function(){
    var rows= 65;
    createRow(rows);
    var mousedown=false;
    var atr=document.getElementById("c1");
    var coloane = document.getElementsByClassName("collum");
    window.addEventListener('mousedown', function(){
        mousedown=true;
    });

    window.addEventListener('mouseup', function(){
        mousedown=false;
    });
    for( var i=0, len=coloane.length;i<len;i++){
        coloane[i].addEventListener('mouseover', function(){
            // console.log(this);
            this.addEventListener('click',function(){
                this.style.backgroundColor = atr.value;
            });
            if(mousedown){
                this.style.backgroundColor = atr.value;
            }
        });
    }
    }