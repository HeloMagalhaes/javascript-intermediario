function adicionarComentario() {
    let inputComentario = document.getElementsByName('novo-comentario');
    console.log(inputComentario)

    let textoDigitado = inputComentario[0].value;
    
    let novosComentarios = document.getElementById('novos-comentarios');

    novosComentarios.innerHTML += `<p> Novo comentário: ${textoDigitado} </p>`
}