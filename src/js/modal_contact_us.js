/*  openModalBtn2: document.querySelector("[data-modal-open='2']"),
  closeModalBtn2: document.querySelector("[data-modal-close='2']"),
  modal2: document.querySelector("[data-modal='2']"),

  openModalBtn3: document.querySelector("[data-modal-open='3']"),
  closeModalBtn3: document.querySelector("[data-modal-close='3']"),
  modal3: document.querySelector("[data-modal='3']"),
  modalForm3: document.querySelector('.subscribe_modal_form_wrapper'),
  inputEmail3: document.getElementById('user_email_3'),
  refs.openModalBtn2.addEventListener("click", toggleModal2);
  refs.openModalBtn2.addEventListener('click', openModal2);
  refs.closeModalBtn2.addEventListener("click", toggleModal2);
  refs.openModalBtn3.addEventListener("click", toggleModal3);

  if (refs.modal.classList.contains('is-hidden')) {
    refs.inputName.value = '';
    refs.inputEmail.value = '';
    clearValidationIcons();
    clearLabelColors();

    function openModal2() {
      toggleModal();
      refs.modal2.classList.remove('is-hidden');
    }
    function toggleModal2() {
      refs.modal2.classList.toggle('is-hidden');
    }
    function toggleModal3 (){
      refs.modal3.classList.toggle('is-hidden')
      if (refs.modal3.classList.contains('is-hidden'))
      refs.inputEmail3.value = ''
      clearValidationIcons()
      clearLabelColors()
    
    }
  }
*/
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open='1']"),
    closeModalBtn: document.querySelector("[data-modal-close='1']"),
    modal: document.querySelector("[data-modal='1']"),
    modalForm: document.querySelector('.contact_us_modal_form_wrapper'),
    inputName: document.getElementById('user_name'),
    inputEmail: document.getElementById('user_email'),
    nameLabel: document.querySelector('.label_name'),
    emailLabel: document.querySelector('.label_email'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);


  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  function clearValidationIcons() {
    document.querySelector('.valid_name_modal_icon').style.display = 'none';
    document.querySelector('.invalid_name_modal_icon').style.display = 'none';
    document.querySelector('.valid_email_modal_icon').style.display = 'none';
    document.querySelector('.invalid_email_modal_icon').style.display = 'none';
  }

  function clearLabelColors() {
    refs.nameLabel.classList.remove('valid', 'invalid');
    refs.emailLabel.classList.remove('valid', 'invalid');
  }
})();