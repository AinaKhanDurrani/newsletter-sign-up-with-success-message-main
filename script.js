document.addEventListener("DOMContentLoaded", () => {
    const submit = document.getElementById("submit");
    const remove = document.getElementById("remove");
    const userEmailSpan = document.getElementById("user_email");
    const thanksContainer = document.querySelector(".thanks_container");
    const subscriptionContainer = document.querySelector(".subscription_container");
    const emailInput = document.getElementById("email");
    const errorMsg = document.querySelector(".error_msg");
  
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    submit.addEventListener("click", (event) => {
      event.preventDefault();
      const email = emailInput.value.trim();
  
      if (emailRegex.test(email)) {
        userEmailSpan.textContent = email;
        subscriptionContainer.classList.add("hidden");
        thanksContainer.classList.remove("hidden");
      } else {
        emailInput.classList.add("error");
        errorMsg.classList.remove("hidden");
      }
    });
  
    remove.addEventListener("click", () => {
      thanksContainer.classList.add("hidden");
      subscriptionContainer.classList.remove("hidden");
      emailInput.classList.remove("error");
      errorMsg.classList.add("hidden");
      emailInput.value = "";
    });
  
    emailInput.addEventListener("input", () => {
      const email = emailInput.value.trim();
  
      if (email == "") {
        emailInput.classList.remove("error");
        errorMsg.classList.add("hidden");
      } 
    });
  });
  