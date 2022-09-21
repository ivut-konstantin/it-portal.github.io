'use strict';

/* МОДАЛЬНОЕ ОКНО */
let btns = document.querySelectorAll("*[data-modal-btn]");
let body = document.querySelector('#body');
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
        let name = btns[i].getAttribute('data-modal-btn');
        let modal = document.querySelector("[data-modal-window='" + name + "']");
        modal.style.display = 'block';
        function openModal(screen) {
            if (screen.matches) {
                modal.style.animation = 'shift-media-right .7s ease';
            } else {
                modal.style.animation = 'shift-right .7s ease';
            }
        }
        let screen = window.matchMedia('(max-width: 768px)');
        openModal(screen);
        body.style.overflow = 'hidden';
        let close = modal.querySelector('.close_modal_window');
        close.addEventListener('click', function () {
            function closeModal(screen) {
                if (screen.matches) {
                    modal.style.animation = 'shift-media-left .7s ease';
                } else {
                    modal.style.animation = 'shift-left .7s ease';
                }
            }
            closeModal(screen);
            body.style.overflow = 'visible';
            setTimeout(function () {
                modal.style.animationPlayState = 'paused';
            }, 650);
            setTimeout(function () {
                modal.style.display = 'none';
            }, 650);
        });
    });
    screen.addListener(openModal);
    screen.addListener(closeModal);
}

// ПАГИНАЦИЯ

// const progress = document.getElementById('progress');
// const prev = document.getElementById('prev');
// const next = document.getElementById('next');
// const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    update();
});
prev.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1;
    }
    update();
});

function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('acive');
        }
    })

    const actives = document.querySelectorAll('.active');
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}

































// window.onclick = function (event) {
//     if (event.target.hasAttribute('data-modal-window')) {
//         let modals = document.querySelectorAll('*[data-modal-window]');
//         for (let i = 0; i < modals.length; i++) {
//             modals[i].style.display = "none";
//         }
//     }
// }



