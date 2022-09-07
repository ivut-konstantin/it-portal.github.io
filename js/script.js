'use strict';

/* МОДАЛЬНОЕ ОКНО */
let btns = document.querySelectorAll("*[data-modal-btn]");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
        let name = btns[i].getAttribute('data-modal-btn');
        let modal = document.querySelector("[data-modal-window='" + name + "']");
        modal.style.display = "block";
        function openModal(screen) {
            if (screen.matches) {
                modal.style.animation = "shift-media-right .7s ease";
            } else {
                modal.style.animation = "shift-right .7s ease";
            }
        }
        let screen = window.matchMedia('(max-width: 768px)');
        openModal(screen);
        let close = modal.querySelector(".close_modal_window");
        close.addEventListener('click', function () {
            function closeModal(screen) {
                if (screen.matches) {
                    modal.style.animation = "shift-media-left .7s ease";
                } else {
                    modal.style.animation = "shift-left .7s ease";
                }
            }
            closeModal(screen);
            setTimeout(function () {
                modal.style.animationPlayState = "paused";
            }, 650);
            setTimeout(function () {
                modal.style.display = "none";
            }, 650);
        });
    });
    screen.addListener(openModal);
    screen.addListener(closeModal);
}

// window.onclick = function (event) {
//     if (event.target.hasAttribute('data-modal-window')) {
//         let modals = document.querySelectorAll('*[data-modal-window]');
//         for (let i = 0; i < modals.length; i++) {
//             modals[i].style.display = "none";
//         }
//     }
// }



