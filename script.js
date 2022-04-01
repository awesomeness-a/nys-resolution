/*
window.addEventListener("load", function() {
    const form = document.getElementById('survey-form');
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const data = new FormData(form);
        const action = e.target.action;
        fetch(action, {
            method: 'POST',
            body: data,
        })
        .then(() => {
            alert("Well done! Now, how about executing on your awesome resolution? 🤗");
        })
    });
});
*/

window.addEventListener("load", function() {
    const form = document.getElementById('survey-form');
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const data = new FormData(form);
        const action = e.target.action;
        fetch(action, {
            method: 'POST',
            body: data,
        })
        .then(() => {
            Swal.fire({
                title: 'Well done!',
                text: 'Now, how about executing on your awesome resolution? 🤗',
                color: '#202B31',
                imageUrl: 'rocket.jpg',
                imageWidth: 300,
                imageHeight: 'auto',
                imageAlt: 'Rocket on the way',
                confirmButtonText: 'Ok, sure!',
                confirmButtonColor: '#2336AF',
                buttonsStyling: false,
                customClass: 'sweet-alert',
            });
        })
    });
});
