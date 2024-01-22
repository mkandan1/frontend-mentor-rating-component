const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', function () {
    const radioButtonGroup = document.getElementsByName('rating');
    const checked = Array.from(radioButtonGroup).find(
        (x) => x.checked
    );

    const ratingContainers = document.querySelectorAll('.feedback_rating_number');

    try {
        if (checked.value == undefined) {
            console.error("No option selected");
        }
        else {
            window.location.href = 'thankyou.html'
            ratingContainers.forEach((ratingContainer) => {
                ratingContainer.style.border = '0px solid red';
            })
        }
    }
    catch (TypeError) {
        ratingContainers.forEach((ratingContainer) => {
            ratingContainer.style.border = '1px solid red';
        })
    }
})



// Set active state of the radio button

// Listen for changes. Find the element. Set active class

const labels = document.querySelectorAll('.feedback_rating_number');

labels.forEach((label) => {
    const radio = label.querySelector('input[type="radio"]');

    radio.addEventListener('click', () => {

        labels.forEach((label) => {
            label.classList.remove('active');
        })

        label.classList.add('active');
    })
});