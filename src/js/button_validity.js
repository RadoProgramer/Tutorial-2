document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact_us_modal_form_wrapper');
  const sendButton = document.querySelector('.Contact_us_modal_button');

  form.addEventListener('input', function () {
    const userNameInput = document.getElementById('user_name');
    const userEmailInput = document.getElementById('user_email');

    const isUserNameValid = userNameInput.checkValidity();
    const isUserEmailValid = userEmailInput.checkValidity();

    if (isUserNameValid && isUserEmailValid) {
      sendButton.classList.add('valid');
    } else {
      sendButton.classList.remove('valid');
    }
  });
});
