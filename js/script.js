"use strict";

// функция смены блока с анимацией потухания\появления
let startBlock_Close = function(idBlockClose, idBlockOpen){

    let blockClose = document.getElementById(idBlockClose);
    let blockOpen = document.getElementById(idBlockOpen);

    if(blockClose.style.display != 'none'){

        blockClose.style.animationName = 'start-close';

        setTimeout(()=>{ blockClose.style.display = 'none' }, 2000);

        setTimeout(()=>{ blockOpen.style.display = 'block' }, 2000);

        blockOpen.style.animationName = 'start-open';

        if(blockOpen.id == 'second-block') setTimeout(()=> counterChange('counter-pulse'), 2000);
    }

} // startBlock_Close

// функция изменения счетчика сердцебиения
let pulseFlagStop = 0;
let counterChange = function(idCounter){
    
    let counterObj = document.getElementById(idCounter);
    let number = 0;
    
    setInterval(()=>{ 
        
        if(pulseFlagStop != 1){
            counterObj.innerText = number <= 999 ? number++ : number = 1;
        }
        else{
            counterObj.style.animation = 'none';
            return;
        }

    }, 200);

} // counterChange

// функция остановки сердца
let heartPause = function(idHeart, btnPause){

    let heart = document.getElementById(idHeart);
    let span = document.getElementById('spanStopHis');
    let spanCount = document.getElementById('counter-pulse');

    // скрываем кнопку паузы и подсказку 
    btnPause.style.display = 'none';
    span.style.display = 'none';
 
    // останавливаем счетчик сердцебиения
    pulseFlagStop = 1;

    // выключаем анимации сердца
    heart.style.animation = 'none';

    // добавляем офигевшего кота
    spanCount.classList.add('ani-cat');
    spanCount.innerHTML = '🙀';
    spanCount.style.fontSize = '45px';
    
    // меняем блоки контента
    startBlock_Close('second-block', 'thirty-block');
}


let catToTheMoon = function(){
    let cat = document.getElementById('catMoon');
    let smile = document.getElementsByClassName('smile')[0];

    cat.style.animation = 'rainbawcat-anim 2s';
    setTimeout(()=> cat.style.display = 'none', 2000);
    smile.style.display = 'block';
    smile.style.animation = 'smile-anim 2s';
    smile.style.fontSize = '60px';

    setTimeout(()=> startBlock_Close('thirty-block', 'fourth-block'), 1000);
}