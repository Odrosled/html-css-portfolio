const form = document.getElementById("myForm");
form.addEventListener("submit", FormSubmit);

async function FormSubmit(e) {
  e.preventDefault();
  await SendMail();
  ResetInputs();
}

async function SendMail() {
  console.log("sendmail");
  let params = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
  };
  const res = await emailjs.send("service_yuh5y8j", "template_9key6ae", params);
  alert("Success! " + res.status);
}

function ResetInputs() {
  const inputs = document.querySelectorAll("form input, form textarea");
  inputs.forEach((input) => (input.value = ""));
}
