document.querySelector('.burger-menu-btn').addEventListener('click', function() {
  document.querySelector('.burger-menu').classList.toggle('open');
});

document.querySelectorAll('.burger-menu-content ul li').forEach(item => {
  item.addEventListener('click', function(event) {
    const submenu = this.querySelector('ul');
    if (submenu) {
      event.stopPropagation(); // Предотвращаем всплытие события, чтобы не закрывать меню при клике на пункт подменю
      submenu.classList.toggle('open');
    } else {
      document.querySelector('.burger-menu').classList.remove('open');
    }
  });
});

document.querySelector('.burger-menu-btn').addEventListener('click', function(event) {
  event.stopPropagation(); // Предотвращаем всплытие события, чтобы не закрывать меню при клике на бургер
});

document.addEventListener('click', function() {
  document.querySelector('.burger-menu').classList.remove('open');
});

document.addEventListener("DOMContentLoaded", function() {
    const text = "Здійснюємо адресну доставку у містах Київ, Ніжин, Борзна, Бахмач, Конотоп, Кролевець";
    const typingText = document.getElementById('text-container');
    let typing = false; // Флаг, показывающий, идет ли печать текста в данный момент
    
    function startTyping() {
      if (!typing) {
        typing = true;
        typeWriter(text, 0);
      }
    }

    function typeWriter(text, i) {
      if (i < text.length) {
        typingText.innerHTML += text.charAt(i);
        i++;
        setTimeout(function() {
          typeWriter(text, i);
        }, 100); // Задержка в миллисекундах между печатью символов
      } else {
        typing = false;
      }
    }

    // Функция, которая проверяет, виден ли раздел на экране
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    // Обработчик события прокрутки страницы
    window.addEventListener('scroll', function() {
        if (isElementInViewport(document.getElementById('text'))) {
            startTyping(); // Начать печать текста, когда раздел становится видимым
            window.removeEventListener('scroll', arguments.callee);
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
  const printerText = document.getElementById("printer-text");
  const paragraphs = printerText.getElementsByTagName("p");
  
  for (let i = 0; i < paragraphs.length; i++) {
    animateText(paragraphs[i]);
  }
});

function animateText(element) {
  const text = element.textContent;
  element.textContent = "";
  
  for (let i = 0; i < text.length; i++) {
    (function(i) {
      setTimeout(function() {
        element.textContent += text[i];
      }, 50 * i);
    })(i);
  }
}
const text = "КУТОВI ДИВАНИ";
const textContainer = document.querySelector('.typed-text');

function typeWriter(text, i, cb) {
  if (i < text.length) {
    textContainer.textContent += text.charAt(i);
    i++;
    setTimeout(() => typeWriter(text, i, cb), Math.random() * 100); // Adjust speed here
  } else {
    cb();
  }
}

typeWriter(text, 0, () => {
  // Typing finished
});
  var i = 0;
  var txt = 'Some text'; // Ваш текст
  var speed = 50;
  var targetElement = document.getElementById('yourElementId'); // Получаем ссылку на элемент

  // Проверяем, существует ли элемент с указанным id
  if (targetElement) {
    // Рекурсивная функция для эффекта печатания текста
    function type() {
      if (i < txt.length) {
        targetElement.textContent += txt.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    // Вызываем функцию type
    type();
  } else {
    console.error('Element with id "yourElementId" not found'); // Логируем ошибку, если элемент не найден
  }
  // Получаем все элементы <div> на странице
var divElements = document.getElementsByTagName('div');

// Проходим по каждому элементу и выводим его содержимое
for (var i = 0; i < divElements.length; i++) {
  console.log(divElements[i].textContent);
}


  var button = document.querySelector('.buttonmen');
  var menu = document.querySelector('.menu-ft');

  // Добавляем обработчик события клика на кнопку
  button.addEventListener('click', function() {
    // Переключаем класс active для меню
    menu.classList.toggle('active');
  });

  // Добавляем обработчик события клика за пределами меню
  document.addEventListener('click', function(event) {
    // Проверяем, что клик был сделан вне меню и кнопки
    if (!menu.contains(event.target) && !button.contains(event.target)) {
      // Если да, скрываем меню
      menu.classList.remove('active');
    }
  });
