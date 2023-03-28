let loginLink = document.querySelector('.login-link');
let modalLogin = document.querySelector('.modal-login');
let modalLoginClose = modalLogin.querySelector('.modal__close');
let formUser = modalLogin.querySelector('.form-user');
let fieldLogin = modalLogin.querySelector('[name=login]');
let fieldPassword = modalLogin.querySelector('[name=password]');

loginLink.addEventListener('click', function (evt) {
    evt.preventDefault();

    modalLogin.classList.add('modal--show');

    fieldLogin.focus();
});

modalLoginClose.addEventListener('click', function (evt) {
    evt.preventDefault();

    modalLogin.classList.remove('modal--show');
    modalLogin.classList.remove('modal--error');
});

document.addEventListener('keydown', function (evt) {
    if (evt.keyCode == 27) {
        evt.preventDefault();
        
        if (modalLogin.classList.contains('modal--show')) {
            modalLogin.classList.remove('modal--show');
            modalLogin.classList.remove('modal--error');
        }
    }
});

formUser.addEventListener('submit', function (evt) {
    if (!fieldLogin.value || !fieldPassword.value) {
        evt.preventDefault();

        modalLogin.classList.remove('modal--error');
        modalLogin.offsetWidth = modalLogin.offsetWidth;
        modalLogin.classList.add('modal--error');
    }
});