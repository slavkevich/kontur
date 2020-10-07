// Slider js
$(document).ready(function () {
  $('.main__slider').slick({
    dots: true,
    autoplay: true
  });
});

//Quantity 
let quantityButtons = document.querySelectorAll('.quantity__button');
if (quantityButtons.length > 0) {
  for (let index = 0; index < quantityButtons.length; index++) {
    const quantityButton = quantityButtons[index];
    quantityButton.addEventListener("click", function (e) {
      let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);
      if (quantityButton.classList.contains('quantity__button-plus')) {
        value++;
      } else {
        value = value - 1;
        if (value < 1) {
          value = 1
        }
      }
      quantityButton.closest('.quantity').querySelector('input').value = value;
    });
  };
};

// Burger

$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.header-bottom__items').toggleClass('active');
  });
});

// Sticky bar

(function () { // анонимная функция (function(){ })(), чтобы переменные "a" и "b" не стали глобальными
  var a = document.querySelector('#aside1'),
    b = null; // селектор блока, который нужно закрепить
  window.addEventListener('scroll', Ascroll, false);
  document.body.addEventListener('scroll', Ascroll, false); // если у html и body высота равна 100%
  function Ascroll() {
    if (b == null) { // добавить потомка-обёртку, чтобы убрать зависимость с соседями
      var Sa = getComputedStyle(a, ''),
        s = '';
      for (var i = 0; i < Sa.length; i++) { // перечислить стили CSS, которые нужно скопировать с родителя
        if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
          s += Sa[i] + ': ' + Sa.getPropertyValue(Sa[i]) + '; '
        }
      }
      b = document.createElement('div'); // создать потомка
      b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
      a.insertBefore(b, a.firstChild); // поместить потомка в цепляющийся блок первым
      var l = a.childNodes.length;
      for (var i = 1; i < l; i++) { // переместить во вновь созданного потомка всех остальных потомков (итого: создан потомок-обёртка, внутри которого по прежнему работают скрипты)
        b.appendChild(a.childNodes[1]);
      }
      a.style.height = b.getBoundingClientRect().height + 'px'; // если под скользящим элементом есть другие блоки, можно своё значение
      a.style.padding = '0';
      a.style.border = '0'; // если элементу присвоен padding или border
    }
    if (a.getBoundingClientRect().top <= 0) { // elem.getBoundingClientRect() возвращает в px координаты элемента относительно верхнего левого угла области просмотра окна браузера
      b.className = 'sticky';
    } else {
      b.className = '';
    }
    window.addEventListener('resize', function () {
      a.children[0].style.width = getComputedStyle(a, '').width
    }, false); // если изменить размер окна браузера, измениться ширина элемента
  }
})()