function tocaSom(seletorAudio) {

    const elemento = document.querySelector(seletorAudio);
        //Posso deixar somente elemento
        // (elemento != null && elemento.localName === 'audio')
    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Elemento não encontado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');



for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;//Template String

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (e) {

        if (e.code === 'Space' || e.code === 'Enter') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }

} 


/*

document.querySelectorAll('.tecla').forEach(function(tecla) {
    tecla.addEventListener('click', function(event) {
        const elementoClicado = event.target;

        if (elementoClicado.classList.contains('ativa')) {
            elementoClicado.classList.remove('ativa');
        } else {
            elementoClicado.classList.add('ativa');
        }
    });
});


*/