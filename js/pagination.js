let ThisPage = 1;
let limit = 6;
let list = document.querySelectorAll(".post .post-box");

function loadItem(){
    let beginGet = limit  * (ThisPage - 1);
    let endGet = limit * ThisPage - 1;
    list.forEach((item, key) => {
        if(key >= beginGet && key <= endGet){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
    listPage();
}
loadItem();

function listPage(){
    let count = Math.cell(list.length /limit);
    document.querySelector('.listPage').innerHTML = "";

    if(ThisPage != 1){
        let prev = document.createElement("li");
        prev.innerText = 'PREV';
        prev.setAttribute("onclick", "changepage(" + (ThisPage -1) + ")");
        document.querySelector('.listPage').appendChild(prev);
    }

    for(i = 1; i <= count; i++){
        let newPage = document.createElement('li');
        newPage.innerText = i;
        if(i == ThisPage){
            newPage.classList.add('active');
        }
        newPage.setAttribute('onclick',"changePage(" + i + ")");
        document.querySelector('.listPage').appendChild(newPage);
    }

    if (ThisPage != count) {
    let next = document.createElement('li');
    next.innerText = "NEXT";  
    next.setAttribute("onclick", "changepage(" + (ThisPage + 1) + ")");
    document.querySelector('.listPage').appendChild(next);    
}
}


function changePage(i){
    ThisPage = i;
    loadItem();
}

// $('section.post container').each(
//     function() {
//       alert($('.item', $(this)).length);
//     }
//   );
