let selectDeEstado = document.querySelector("select[name='estado']");

selectDeEstado.addEventListener('change', function (){
    alert('mudou o select')
})

console.log(selectDeEstado)

//forma encadeada
//document.querySelector("select[name='estado']");
//.addEventListener('change', function (){
//    alert('mudou o select')
//})



