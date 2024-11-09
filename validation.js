const form = document.getElementById("contactForm");
const fn = document.getElementById("fname");
const ln = document.getElementById("lname");
const em = document.getElementById("email");
const generalEnquiry = document.getElementById("generalEnquiry");
const supportRequest = document.getElementById("supportRequest");
const message = document.getElementById("txt");
const check3 = document.getElementById("check");

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInput();
});

const validateInput = () => {
    const fname = fn.value.trim();
    const lname = ln.value.trim();
    const email = em.value.trim();
    const messageText = message.value.trim();
    let isValid = true;

    if (fname === "") {
        fn.classList.add("is-invalid");
        isValid = false;
    } else {
        fn.classList.remove("is-invalid");
    }

    if (lname === "") {
        ln.classList.add("is-invalid");
        isValid = false;
    } else {
        ln.classList.remove("is-invalid");
    }
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        em.classList.add("is-invalid");
        isValid = false;
    } else {
        em.classList.remove("is-invalid");
    }

    if (!generalEnquiry.checked && !supportRequest.checked) {
        generalEnquiry.classList.add("is-invalid");
        supportRequest.classList.add("is-invalid");
        isValid = false;
    } else {
        generalEnquiry.classList.remove("is-invalid");
        supportRequest.classList.remove("is-invalid");
    }

    if (messageText === "") {
        message.classList.add("is-invalid");
        isValid = false;
    } else {
        message.classList.remove("is-invalid");
    }

    if (!check3.checked) {
        check3.classList.add("is-invalid");
        isValid = false;
    } else {
        check3.classList.remove("is-invalid");
    }

    if (isValid) {
        console.log("Form is valid!");
        form.submit();
    } else {
        console.log("Form is invalid!");
    }
}