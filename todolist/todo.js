let lidom=document.getElementById("list")

lidom.addEventListener("click",function(f){
    f.target.classList.toggle("checked")
})

function newElement(){
    let li =document.createElement("li")
    let task=document.getElementById("task")
    li.textContent=task.value
    
    if(task.value.trim()==""){        
        $("#f_toast").toast('show');
    }
    else{
        $("#t_toast").toast('show');
        lidom.append(li)
        localStorage.setItem("items",JSON.stringify(lidom.innerText))
    }
    
    task.value=""

    var x = document.createTextNode("\u00D7");
    var span = document.createElement("SPAN");
    span.className = "close";
    span.appendChild(x);
    li.appendChild(span)

    var close = document.getElementsByClassName("close");
    
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var del = this.parentElement;
            localStorage.removeItem("this.parentElement")
            del.style.display = "none";
        }
    }

}