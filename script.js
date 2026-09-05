const signupForm = document.querySelector('.signup-form');
const formMessage = document.querySelector('.form-message');

signupForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = new FormData(signupForm).get('email');
  if (!email) return;
  formMessage.textContent = 'You’re on the list. See you by the water.';
  signupForm.reset();
});

document.querySelector('.menu-button').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('is-open');
});