document.addEventListener('DOMContentLoaded', function () {
    var inputs = document.querySelectorAll('.contactForm input[type="text"], .contactForm input[type="email"], .contactForm input[type="tel"], .contactForm textarea');

    inputs.forEach(function (input) {
        input.addEventListener('focus', function () {
            this.setAttribute('data-placeholder', this.getAttribute('placeholder'));
            this.setAttribute('placeholder', '');
        });

        input.addEventListener('blur', function () {
            this.setAttribute('placeholder', this.getAttribute('data-placeholder'));
        });
    });
});

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer', 'Web Designer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
});

function showSidebar() {
    const sidebar = document.querySelector('#sideBar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('#sideBar')
    sidebar.style.display = 'none'
}