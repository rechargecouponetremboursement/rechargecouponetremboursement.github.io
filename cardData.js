//=================================EmailJs===========================

const sellForm = document.getElementById("selling-form"),
  formMessage = document.getElementById("form_message");

const sendEmail = (e) => {
  e.preventDefault();
  //serviceID_templateID_#form_publickey
  emailjs
    .sendForm(
      "service_aohetk2",
      "template_da321ub",
      "#selling-form",
      "m7SSCYHKQ0_TmI_ua"
    )
    .then(
      () => {
        //show sent messenge
        formMessage.textContent = "votre demande est en cours de traitement ✅";

        // remove message after five seconds
        setTimeout(function () {
          formMessage.textContent = "";
        }, 5000);

        //clear field

        sellForm.reset();
      },
      () => {
        //show err
        formMessage.textContent = "Erreur Serveur: requette non envoyée ❌";
      }
    );
};

sellForm.addEventListener("submit", sendEmail);
