let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

//Scrolling Function
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });
};

//Toggle menu icon and navbar on click
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

//Smooth scroll to the contact section for 'Contact Me' button
document.getElementById('contactButton').addEventListener('click', function() {
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth'
    });
});

// Read More/Read Less function for Technical Expertise Section
document.addEventListener('DOMContentLoaded', (event) => {
    const toggles = document.querySelectorAll('.read-more-toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('change', function () {
            const dots = this.parentElement.querySelector('.dots');
            const extra = this.parentElement.querySelector('.extra');
            const label = this.parentElement.querySelector('label.readLabel');

            if (this.checked) {
                dots.style.display = 'none';
                extra.style.maxHeight = '1000px'; 
                extra.style.opacity = '1';
                label.textContent = 'Read Less';
            } else {
                dots.style.display = 'inline';
                extra.style.maxHeight = '0';
                extra.style.opacity = '0';
                label.textContent = 'Read More';
            }
        });
    });
});

// References Section Scroll Animation
document.addEventListener('DOMContentLoaded', () => {
    const referencesBars = document.querySelectorAll('.referencesBar');

    const scrollAnimation = () => {
        referencesBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                bar.classList.add('scroll-in');
            } else {
                bar.classList.remove('scroll-in');
            }
        });
    };

    window.addEventListener('scroll', scrollAnimation);
    scrollAnimation(); 
});

// Experience Section Scroll Animation
document.addEventListener('DOMContentLoaded', () => {
    const experienceBars = document.querySelectorAll('.experienceBar');

    const scrollAnimation = () => {
        experienceBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                bar.classList.add('scroll-in');
            } else {
                bar.classList.remove('scroll-in');
            }
        });
    };

    window.addEventListener('scroll', scrollAnimation);
    scrollAnimation(); 
});