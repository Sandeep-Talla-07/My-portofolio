emailjs.init({
  publicKey: "S2aYJSTPjar_sCbzq",
});

const form = document.getElementById("myForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  clearErrors();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  let valid = true;

  if (name.value.trim() === "") {
    showError(name, "Please enter your name");
    valid = false;
  }

  if (email.value.trim() === "") {
    showError(email, "Please enter your email");
    valid = false;
  } else if (!validateEmail(email.value)) {
    showError(email, "Invalid email address");
    valid = false;
  }

  if (message.value.trim() === "") {
    showError(message, "Please enter a message");
    valid = false;
  }

  if (!valid) return;

  const btn = form.querySelector(".btn");
  btn.disabled = true;
  btn.innerHTML = "Sending...";

  emailjs
    .send("service_68dsn2d", "template_uxayo6t", {
      name: name.value,
      email: email.value,
      //   subject: subject.value,
      message: message.value,
    })
    .then(() => {
      alert("Message sent successfully!");

      form.reset();

      btn.disabled = false;
      btn.innerHTML = `<ion-icon name="paper-plane-outline"></ion-icon> Send Message`;
    })
    .catch((error) => {
      console.error(error);

      alert("Failed to send message.");

      btn.disabled = false;
      btn.innerHTML = `<ion-icon name="paper-plane-outline"></ion-icon> Send Message`;
    });
});

function showError(input, message) {
  input.nextElementSibling.innerText = message;
}

function clearErrors() {
  document.querySelectorAll("small").forEach((item) => {
    item.innerText = "";
  });
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
