//toggle svg icons on hover
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const normalIcon = card.querySelector('.normal-icon');
            const hoverIcon = card.querySelector('.hover-icon');
            if (normalIcon && hoverIcon) {
                normalIcon.style.display = 'none';
                hoverIcon.style.display = 'block';
            }
        });
        card.addEventListener('mouseleave', () => {
            const normalIcon = card.querySelector('.normal-icon');
            const hoverIcon = card.querySelector('.hover-icon');
            if (normalIcon && hoverIcon) {
                normalIcon.style.display = 'block';
                hoverIcon.style.display = 'none';
            }
        });
    });

    //form response on console
    const reservationForm = document.querySelector('.reservation-form form');
    reservationForm.addEventListener('submit', (event) => {
        event.preventDefault(); 
        const formData = new FormData(event.target);
        console.log('Form data:', Object.fromEntries(formData.entries()));

    });


});

