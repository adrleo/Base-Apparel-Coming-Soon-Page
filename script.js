const form = document.getElementById("form");
const email = document.getElementById("email");

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email.toLowerCase()));
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailVal = email.value;
  console.log(emailVal);
  console.log(validateEmail(emailVal));
  if (!validateEmail(emailVal)) {
    form.classList.add("error");
  } else if (validateEmail(emailVal)) {
    form.classList.remove("error");
  }
});
