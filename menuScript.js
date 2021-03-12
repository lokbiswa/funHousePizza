// filter function

function filterDiv(current){
    if (!e) var e = window.event;
    activeTab(e.toElement);
    let element = document.querySelectorAll("div.filterDiv");
    let x = element.length;
    for(i= 0; i<x;i++){
        if(current == "all"){
            element[i].classList.remove('d-none');
        }
        else{
            if (element[i].classList.contains(current)){
                element[i].classList.remove('d-none');
            }
            else{
                if(element[i].classList.contains('d-none')){
                }
                else{
                    element[i].classList.add('d-none');
                }
            }

        }
    }
}

function activeTab(button){
    let element= document.getElementById('myBtnContainer');
    let current = element.getElementsByClassName('current');
    current[0].className = current[0].className.replace(" current", "");
    button.className += " current";
}