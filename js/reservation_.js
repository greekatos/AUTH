const universityStudent = document.getElementById('University_Student');
const schoolStudent = document.getElementById('School_Student');
const other = document.getElementById('Other');

//Check input
const usernameInput = document.querySelector('.username input');
const emailInput = document.querySelector('.email input');
const phoneInput = document.querySelector('.phone_number input');
const book_Button = document.querySelector('.register_btn');
const usernameRegex = /^[a-zA-Z]+[\s-]?[a-zA-Z]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\+?\d{1,3}[-.\s]?\d{3}[-.\s]?\d{3,4}$/


universityStudent.addEventListener('click', () => {
  schoolStudent.checked = false;
  other.checked = false;
});

schoolStudent.addEventListener('click', () => {
  universityStudent.checked = false;
  other.checked = false;
});

other.addEventListener('click', () => {
  universityStudent.checked = false;
  schoolStudent.checked = false;
});

function validateInputs() {
  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  let isValid = true;

  if (!usernameRegex.test(username)) {
    console.log('user');
    usernameInput.classList.add('error');
    isValid = false;
  } else {
    usernameInput.classList.remove('error');
  }

  if (!emailRegex.test(email)) {
    console.log('email');
    emailInput.classList.add('error');
    isValid = false;
  } else {
    emailInput.classList.remove('error');
  }

  if (!phoneRegex.test(phone)) {
    console.log('phone');
    phoneInput.classList.add('error');
    isValid = false;
  } else {
    phoneInput.classList.remove('error');
  }

  return isValid;
}


book_Button.addEventListener('click', function(event) {
  if (!validateInputs()) {
    alert("SOMETHING WRONG");
    event.preventDefault();
  } else {
    alert("ALL GOOD");
  }
});

