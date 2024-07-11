//toggle svg icons on hover
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const normalIcon = card.querySelector('.normal-icon');
            const hoverIcon = card.querySelector('.hover-icon');
            normalIcon.style.display = 'none';
            hoverIcon.style.display = 'block';
        });
        card.addEventListener('mouseleave', () => {
            const normalIcon = card.querySelector('.normal-icon');
            const hoverIcon = card.querySelector('.hover-icon');
            normalIcon.style.display = 'block';
            hoverIcon.style.display = 'none';
        });
    });

    //form response on console  
    const reservationForm = document.querySelector('.reservation-form form');
    reservationForm.addEventListener('submit', (event) => {
        event.preventDefault(); 
        const formData = new FormData(event.target);
        console.log('Form data:', Object.fromEntries(formData.entries()));

    });




    //testimonials slider
    const testimonials = document.querySelectorAll('.testimonial-card');
    let currentTestimonialIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach((card, idx) => {
            card.style.display = idx === index ? 'block' : 'none';
        });
    }

    document.getElementById('testimonialContainer').addEventListener('click', function(e) {
        if (e.target.classList.contains('new-testimonial') || e.target.parentNode.classList.contains('new-testimonial')) {
            currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
            showTestimonial(currentTestimonialIndex);
        }
    });



    //menu toggle
    const menuTypes = document.querySelectorAll('.menu-type');
    const menuContainers = document.querySelectorAll('.menu-items');

    menuTypes.forEach(type => {
        type.addEventListener('click', () => {
            const selectedMenu = type.getAttribute('data-menu');


            menuTypes.forEach(t => t.classList.remove('active'));
            type.classList.add('active');


            menuContainers.forEach(container => {
                if (container.classList.contains(selectedMenu)) {
                    container.style.display = 'flex';
                } else {
                    container.style.display = 'none';
                }
            });
        });
    });




});

