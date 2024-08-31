
document.addEventListener('DOMContentLoaded', function () {
    const container3 = document.querySelector('.container3');

    function handleScroll() {
        const container3Position = container3.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (container3Position < screenPosition) {
            container3.classList.add('show');
        }
    }

    window.addEventListener('scroll', handleScroll);
});
document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container4');

    function handleScroll() {
        const containerPosition = container.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (containerPosition < screenPosition) {
            container.classList.add('show');
        }
    }

    window.addEventListener('scroll', handleScroll);
});
