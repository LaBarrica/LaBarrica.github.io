let pags = document.getElementById("pagination");
//Filter categorias
$(document).ready(function(){
    $(".filter-item").click(function(){
        const value = $(this).attr('data-filter')
        if(value === 'all'){
            $('.post-box').show('1000')
        }else{
            $('.post-box').not('.' + value).hide('1000');
            $('.post-box').filter('.' + value).show('1000');
        }
    });
    //mover class active
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass();     
    });
    //header scroll
    let header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        header.classList.toggle("shadow", window.scrollY >0);

    });
});


document.getElementById('vodka').addEventListener("click", function() {
    pags.style.display = "none";
});

 document.getElementById('whisky').addEventListener("click", function() {
    pags.style.display = "none";
 });

 document.getElementById('tequila').addEventListener("click", function() {
    pags.style.display = "none";
 } );

 document.getElementById('ron').addEventListener("click", function() {
    pags.style.display = "none";
 } );

 document.getElementById('gin').addEventListener("click", function() {
    pags.style.display = "none";
 });

 document.getElementById('cognac').addEventListener("click", function() {
    pags.style.display = "none";
 });

 document.getElementById('all').addEventListener("click",function(){
    pags.style.display = "";
    loadItem();
 });


//Limitar posts 
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
    let count = Math.ceil(list.length /limit);
    document.querySelector('.listPage').innerHTML = "";

    // if(ThisPage != 1){
    //     let prev = document.createElement("li");
    //     prev.innerText = 'PREV';
    //     prev.setAttribute("onclick", "changepage(" + (ThisPage -1) + ")");
    //     document.querySelector('.listPage').appendChild(prev);
    // }

    for(i = 1; i <= count; i++){
        let newPage = document.createElement('li');
        newPage.innerText = i;
        if(i == ThisPage){
            newPage.classList.add('active');
        }
        newPage.setAttribute('onclick',"changePage(" + i + ")");
        document.querySelector('.listPage').appendChild(newPage);
    }

    // if (ThisPage != count) {
    // let next = document.createElement('li');
    // next.innerText = "NEXT";  
    // next.setAttribute("onclick", "changepage(" + (ThisPage + 1) + ")");
    // document.querySelector('.listPage').appendChild(next);    
// }
}


function changePage(i){
    ThisPage = i;
    loadItem();
}


//search bar toggle
function searchToggle(obj, evt){
    var container = $(obj).closest('.search-wrapper');
        if(!container.hasClass('active')){
            container.addClass('active');
            evt.preventDefault();
        }
        else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
            container.removeClass('active');
            // clear input
            container.find('.search-input').val('');
        }
}

//search recipes
function getRecipes() {
    return document.getElementsByClassName('post-box');
  }

  document.getElementById('search').addEventListener('keyup', function(e) {
    var searchText = this.value.toLocaleLowerCase();
  
    Array.from(getRecipes()).forEach(function(recipe) {
      if (searchText.length === 0) {
         recipe.style.display = '';
      } else {
        var nameElement = recipe.getElementsByClassName('post-title')[0];
      
        if (nameElement && nameElement.innerText.toLocaleLowerCase().indexOf(searchText) > -1) {
          recipe.style.display = 'inline-block';
        } else {
          recipe.style.display = 'none';
        }
      }
    });
  });



