//СЛАЙДЕР КАРТИНОК ЗАЛА
window.addEventListener("load", () => {
    var carousels = document.querySelectorAll(".carousel-3d");
    for (var i = 0; i < carousels.length; i++) {
        carousel(carousels[i]);
    }
});
function carousel(root) {
    var figure = root.querySelector("figure"),
    nav = root.querySelector("nav"),
    images = figure.children,
    n = images.length,
    gap = root.dataset.gap || 0,
    bfc = "bfc" in root.dataset,
    theta = 2 * Math.PI / n,
    currImage = 0;
    setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
    window.addEventListener("resize", () => {
        setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
    });
    setupNavigation();
    function setupCarousel(n, s) {
        var apothem = s / (2 * Math.tan(Math.PI / n));
        figure.style.transformOrigin = `50% 50% ${-apothem}px`;
        for (var i = 0; i < n; i++) images[i].style.padding = `0 ${gap}px`;
        for (i = 0; i < n; i++) {
            images[i].style.transformOrigin = `50% 50% ${-apothem}px`;
            images[i].style.transform = `rotateY(${i * theta}rad)`;
        }
        if (bfc)
        for (i = 0; i < n; i++) images[i].style.backfaceVisibility = "hidden";
        rotateCarousel(currImage);
    }
    function setupNavigation() {
        nav.addEventListener("click", onClick, true);
        function onClick(e) {
            e.stopPropagation();
            var t = e.target;
            if (t.tagName.toUpperCase() != "BUTTON") return;
            if (t.classList.contains("next")) {
                currImage++;
                } else {
                currImage--;
            }
            rotateCarousel(currImage);
        }
    }
    function rotateCarousel(imageIndex) {
        figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
    }
}

let cur;
function showcur() {
    cur = setInterval(function() {
        currImage++;
        rotateCarousel(currImage);
    }, 2000);
}
function clearcur() {
    clearInterval(cur);
}
/*root.onmouseover  = function() {
    clearcur();
}  
root.onmouseout  = function() {
    showcur();
}     
showcur();*/


//ПОП-АП УСЛУГ
const btnPop = document.querySelectorAll('.blockInfo >div button');
const spanPopUp = document.querySelector('#spanPopUp');
const pPopUp = document.querySelector('#pPopUp');
const popUpServiec = document.querySelector('#popUpServiec');
const btnS1 = document.querySelector('#btnS1');
const btnS2 = document.querySelector('#btnS2');
const btnS3 = document.querySelector('#btnS3');
const btnS4 = document.querySelector('#btnS4');
const btnS5 = document.querySelector('#btnS5');
const btnS6 = document.querySelector('#btnS6');
const btnS7 = document.querySelector('#btnS7');
const pS1 = document.querySelector('#pS1');
const pS2 = document.querySelector('#pS2');
const pS3 = document.querySelector('#pS3');
const pS4 = document.querySelector('#pS4');
const pS5 = document.querySelector('#pS5');
const pS6 = document.querySelector('#pS6');
const pS7 = document.querySelector('#pS7');
const body = document.querySelector('#body')


btnPop.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        body.style.opacity = '.83'
        popUpServiec.style.display = 'block'

        if(e.target == btnS1){
            pPopUp.innerHTML = pS1.innerHTML;
            spanPopUp.innerHTML = 'Тренажерний зал'
        }else if(e.target == btnS2){
            pPopUp.innerHTML = pS2.innerHTML;
            spanPopUp.innerHTML = 'Дитячий бокс'
        }else if(e.target == btnS3){
            pPopUp.innerHTML = pS3.innerHTML;
            spanPopUp.innerHTML = 'Бокс'
        }else if(e.target == btnS4){
            pPopUp.innerHTML = pS4.innerHTML;
            spanPopUp.innerHTML = 'Фіт-Бокс'
        }else if(e.target == btnS5){
            pPopUp.innerHTML = pS5.innerHTML;
            spanPopUp.innerHTML = 'Кросфіт'
        }else if(e.target == btnS6){
            pPopUp.innerHTML = pS6.innerHTML;
            spanPopUp.innerHTML = 'Масаж'
        }else if(e.target == btnS7){
            pPopUp.innerHTML = pS7.innerHTML;
            spanPopUp.innerHTML = 'Стретчінг'
        }
    })
  })
function OkClose(){
    popUpServiec.style.display = 'none'
    body.style.opacity = '1'
}
