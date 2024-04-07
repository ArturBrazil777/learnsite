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

// document.addEventListener("DOMContentLoaded", function() {
//   const printerText = document.getElementById("printer-text");
//   const paragraphs = printerText.getElementsByTagName("p");
  
//   for (let i = 0; i < paragraphs.length; i++) {
//     animateText(paragraphs[i]);
//   }
// });

// function animateText(element) {
//   const text = element.textContent;
//   element.textContent = "";
  
//   for (let i = 0; i < text.length; i++) {
//     (function(i) {
//       setTimeout(function() {
//         element.textContent += text[i];
//       }, 50 * i);
//     })(i);
//   }
// }
// const text = "КОРПУСНI МЕБЛI";
// const textContainer = document.querySelector('.typed-text');

// function typeWriter(text, i, cb) {
//   if (i < text.length) {
//     textContainer.textContent += text.charAt(i);
//     i++;
//     setTimeout(() => typeWriter(text, i, cb), Math.random() * 125); // Adjust speed here
//   } else {
//     cb();
//   }
// }

// typeWriter(text, 0, () => {
//   // Typing finished
// });
document.addEventListener("DOMContentLoaded", function() {
    var typingText = document.getElementById("typing-text");
    if (typingText) {
        var isTyped = false;
        var typingTextObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting && !isTyped) {
                    isTyped = true;
                    var text = "КОРПУСНI МЕБЛI"; // ваш текст здесь
                    var typedTextSpan = typingText.querySelector('.typed-text');
                    var cursorSpan = typingText.querySelector('.cursor');

                    function type() {
                        if (text.length > 0) {
                            typedTextSpan.textContent += text.charAt(0);
                            text = text.substring(1);
                            setTimeout(type, 110);
                        } else {
                            cursorSpan.style.display = 'none';
                        }
                    }

                    setTimeout(type, 100);
                    observer.unobserve(entry.target);
                }
            });
        });

        window.addEventListener("scroll", function() {
            typingTextObserver.observe(typingText);
        });
    }
});
  var menuVisible = false; // Переменная для отслеживания видимости меню

  function toggleMenu() {
    var menu = document.getElementById("dropdownMenu");
    if (!menuVisible) {
      menu.style.display = "block"; // Показываем меню
      menuVisible = true; // Обновляем статус видимости меню
    } else {
      menu.style.display = "none"; // Скрываем меню
      menuVisible = false; // Обновляем статус видимости меню
    }
  }
   function toggleMenu() {
    var menu = document.getElementById("dropdownMenu");
    menu.classList.toggle("show-menu"); // Переключаем класс для отображения/скрытия меню
  }
    var timeoutId; // Переменная для хранения идентификатора задержки

  function toggleMenu() {
    var menu = document.getElementById("dropdownMenu");
    if (menu.classList.contains("show-menu")) {
      // Если меню уже открыто, удаляем класс и задерживаем скрытие
      menu.classList.remove("show-menu");
      clearTimeout(timeoutId);
    } else {
      // Если меню закрыто, добавляем класс и задерживаем открытие
      menu.classList.add("show-menu");
      timeoutId = setTimeout(function() {
        menu.classList.remove("show-menu");
      }, 2000); // 2000 миллисекунд (2 секунды) задержки
    }
  }
   var menuVisible = false; // Переменная для отслеживания состояния меню

  function toggleMenu() {
    var menu = document.getElementById("dropdownMenu");
    if (!menuVisible) {
      menu.style.display = "block"; // Показываем меню
      menuVisible = true; // Обновляем состояние меню
    } else {
      menu.style.display = "none"; // Скрываем меню
      menuVisible = false; // Обновляем состояние меню
    }
  }

  // Закрыть меню при клике вне его
  document.addEventListener("click", function(event) {
    var menu = document.getElementById("dropdownMenu");
    var icon = document.querySelector(".icons-gmail");
    if (!menu.contains(event.target) && !icon.contains(event.target)) {
      menu.style.display = "none"; // Скрываем меню
      menuVisible = false; // Обновляем состояние меню
    }
  });
 var menuVisible = false; // Переменная для отслеживания состояния меню

  function toggleMenu() {
    var menu = document.getElementById("dropdownMenu");
    if (!menuVisible) {
      menu.style.display = "block"; // Показываем меню
      menuVisible = true; // Обновляем состояние меню
    } else {
      menu.style.display = "none"; // Скрываем меню
      menuVisible = false; // Обновляем состояние меню
    }
  }

  // Закрыть меню при клике вне его
  document.addEventListener("click", function(event) {
    var menu = document.getElementById("dropdownMenu");
    var icon = document.querySelector(".icons-gmail");
    if (!menu.contains(event.target) && !icon.contains(event.target)) {
      menu.style.display = "none"; // Скрываем меню
      menuVisible = false; // Обновляем состояние меню
    }
  });
  
 
 var gmailMenuVisible = false;
  var callphoneMenuVisible = false;
  var chatMenuVisible = false;

  function toggleMenu(type) {
    var menuId;
    if (type === 'gmail') {
      menuId = "dropdownMenuGmail";
      gmailMenuVisible = !gmailMenuVisible;
    } else if (type === 'callphone') {
      menuId = "dropdownMenuCallphone";
      callphoneMenuVisible = !callphoneMenuVisible;
    } else if (type === 'chat') {
      menuId = "dropdownMenuChat";
      chatMenuVisible = !chatMenuVisible;
    }

    var menu = document.getElementById(menuId);
    if (menu) {
      if (type === 'gmail' && gmailMenuVisible || type === 'callphone' && callphoneMenuVisible || type === 'chat' && chatMenuVisible) {
        menu.style.display = "block";
      } else {
        menu.style.display = "none";
      }
    }
  }

  // Закрыть меню при клике вне него
  document.addEventListener("click", function(event) {
    var gmailMenu = document.getElementById("dropdownMenuGmail");
    var callphoneMenu = document.getElementById("dropdownMenuCallphone");
    var chatMenu = document.getElementById("dropdownMenuChat");
    var gmailIcon = document.querySelector(".icons-gmail");
    var callphoneIcon = document.querySelector(".icons-callphone");
    var chatIcon = document.querySelector(".icons-chat");
    
    if (!gmailMenu.contains(event.target) && !gmailIcon.contains(event.target)) {
      gmailMenu.style.display = "none";
      gmailMenuVisible = false;
    }
    
    if (!callphoneMenu.contains(event.target) && !callphoneIcon.contains(event.target)) {
      callphoneMenu.style.display = "none";
      callphoneMenuVisible = false;
    }

    if (!chatMenu.contains(event.target) && !chatIcon.contains(event.target)) {
      chatMenu.style.display = "none";
      chatMenuVisible = false;
    }
  });