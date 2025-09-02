const abrir = document.getElementById("abrirnav");
const content = document.getElementById("divnav");
const fechar = document.getElementById("closenav");

abrir.addEventListener('click', ()=>{
    content.style.display = "block",
    abrir.style.visibility = "hidden";
     
});

fechar.addEventListener('click', ()=>{
    content.style.display = "none",
    abrir.style.visibility = "inherit";
});
