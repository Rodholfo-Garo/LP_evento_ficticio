
document.addEventListener('DOMContentLoaded', function(){
    AOS.init();

    var botaoMenu = document.querySelector('.nav-container__nav__botao-menu');
    var menuItems = document.querySelector('.nav-container__nav__menu');

    botaoMenu.addEventListener('click', function() {
        if (menuItems.style.display === 'none' || menuItems.style.display === '') {
            menuItems.style.display = 'flex';
        } else {
            menuItems.style.display = 'none';
        }
    });

    
    // document.getElementById('menuToggle').addEventListener('click', function() {
    //     document.getElementById('menu').classList.toggle('show');
    // });

    
    const dataDoEvento = new Date('Mar 06, 2024, 19:00:00')

    const timeStampDoEvento = dataDoEvento.getTime()
    
    const contaAsHoras = setInterval(function(){

        const agora = new Date();
        const timeStampAtual = agora.getTime()
        
        const distanciaDoEvento = timeStampDoEvento - timeStampAtual;
        
        const diaEmMs = 1000 * 60 * 60 * 24;
        const horaEmMs = 1000 * 60 * 60;
        const minutoEmMs = 1000 * 60;
        
        const diasAteOEvento = Math.floor(distanciaDoEvento / diaEmMs );
        
        const horsAteOEvento = Math.floor((distanciaDoEvento % diaEmMs) / horaEmMs);
        
        const mintoAteOEvento = Math.floor((distanciaDoEvento % horaEmMs) / minutoEmMs );

        const segundasAteOEvento = Math.floor((distanciaDoEvento % minutoEmMs) / 1000);
        
        document.getElementById('contador').innerHTML = `${diasAteOEvento} d ${horsAteOEvento} hrs ${mintoAteOEvento}m ${segundasAteOEvento} s`;

        if( distanciaDoEvento < 0){
            clearInterval(contaAsHoras);
            document.getElementById('contador').innerHTML = 'Evento Expirado';
        }

    }, 1000);
    
    //FAQ

    const questions = document.querySelectorAll('[data-faq-question]');

    for (let i=0 ; i < questions.length ; i++ ){
        questions[i].addEventListener('click', abreOuFechaResposta);
    }


    
});

function abreOuFechaResposta(evento){

    const classe = 'faq__questions__item--is-open';
    const elementoPai = evento.target.parentNode;

    elementoPai.classList.toggle(classe);

}



