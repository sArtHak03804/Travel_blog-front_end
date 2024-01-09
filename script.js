let countingStarted = false;

function startCounting() {
    if (countingStarted) return;

    const counters = document.querySelectorAll('.count');

    counters.forEach((counter) => {
        const target = +counter.getAttribute('data-count');
        const increment = target / 100;

        let currentCount = 0;

        const updateCount = () => {
            if (currentCount < target) {
                currentCount += increment;
                counter.textContent = Math.round(currentCount);
                setTimeout(updateCount, 10);
            } else {
                counter.textContent = target;
            }
        };

        updateCount();
    });

    countingStarted = true;
}

function resetCounting() {
    countingStarted = false;

    const counters = document.querySelectorAll('.count');

    counters.forEach((counter) => {
        counter.textContent = "0";
    });
}

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const counterSection = document.querySelector('.counter-section');

window.addEventListener('scroll', () => {
    if (isElementInViewport(counterSection)) {
        startCounting();
    } else {
        resetCounting();
    }
});


function animateOnScroll(className, index, animationDirection) {
    const elements = document.querySelectorAll(`.${className}`);

    if (index >= 0 && index < elements.length) {
        const element = elements[index];

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.target === element) {
                    setTimeout(() => {
                        switch (animationDirection) {
                            case 'left':
                                element.style.transform = 'translateX(0)';
                                break;
                            case 'right':
                                element.style.transform = 'translateX(0)';
                                break;
                            case 'top':
                                element.style.transform = 'translateY(0)';
                                break;
                            case 'bottom':
                                element.style.transform = 'translateY(0)';
                                break;
                        }

                        element.style.opacity = 1;
                        element.style.visibility = 'visible';

                        observer.unobserve(element);
                    }, 500); // Delay of 0.9 seconds (900 milliseconds)
                }
            });
        });

        element.style.opacity = 0;
        element.style.visibility = 'hidden';

        switch (animationDirection) {
            case 'left':
                element.style.transform = 'translateX(-100%)';
                break;
            case 'right':
                element.style.transform = 'translateX(100%)';
                break;
            case 'top':
                element.style.transform = 'translateY(-100%)';
                break;
            case 'bottom':
                element.style.transform = 'translateY(100%)';
                break;
        }

        observer.observe(element);
    }
}


animateOnScroll('services-item', 0, 'left');
animateOnScroll('services-item', 1, 'right');
animateOnScroll('services-item', 2, 'left');

animateOnScroll('why-choose-container', 0, 'left');
animateOnScroll('why-choose-item', 0, 'left');
animateOnScroll('why-choose-item', 1, 'right');

animateOnScroll('testimonials', 0, 'right');
animateOnScroll('testimonial', 0, 'left');
animateOnScroll('testimonial', 1, 'top');
animateOnScroll('testimonial', 2, 'left');


animateOnScroll('booking-image', 0, 'left');
animateOnScroll('booking-details', 0, 'right');


animateOnScroll('destination-item', 0, 'right');
animateOnScroll('destination-item', 1, 'left');
animateOnScroll('destination-item', 2, 'right');
animateOnScroll('destination-item', 3, 'left');
animateOnScroll('destination-item', 4, 'right');
animateOnScroll('destination-item', 5, 'left');
animateOnScroll('destination-item', 6, 'right');


