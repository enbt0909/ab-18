document.addEventListener('DOMContentLoaded', function() {
  const birthdayInput = document.getElementById('birthday-input');
  const ageOutput = document.getElementById("age");
  const button = document.getElementById("btn");

  function formatBirthdayInput(e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
    if (value.length > 2) {
      value = value.slice(0, 2) + '/' + value.slice(2);
    }
    if (value.length > 5) {
      value = value.slice(0, 5) + '/' + value.slice(5);
    }
    e.target.value = value;
  }

  function calculateAge() {
    const input = birthdayInput.value;
    const [day, month, year] = input.split("/");

    if (!day || !month || !year || isNaN(day) || isNaN(month) || isNaN(year)) {
      ageOutput.textContent = "Bidde gib oi güldiges Geburdsdadum oi.";
      return;
    }

    const birthdate = new Date(year, month - 1, day);
    const now = new Date();
    let age = now.getFullYear() - birthdate.getFullYear();
    const m = now.getMonth() - birthdate.getMonth();
    const d = now.getDate() - birthdate.getDate();

    if (m < 0 || (m === 0 && d < 0)) {
      age--;
    }

    if (age >= 18) {
      ageOutput.textContent = "Dr Kunda isch König.";
    } else if (age < 0) {
      ageOutput.textContent = "Dr Kunda isch no nid mol gebora.";
    } else {
      ageOutput.innerHTML = `Dr Kunda isch minderjährig. <br> Er musch no ${18 - age} Johr warta.`;
    }
    ageOutput.textContent += ` Sei Alter bdrägd ${age} Johr.`;
    console.log(ageOutput.textContent);
  }

  if (birthdayInput) {
    birthdayInput.addEventListener('input', formatBirthdayInput);
  } else {
    console.error('Element with id "birthday-input" not found.');
  }

  if (button) {
    button.addEventListener("click", calculateAge);
  } else {
    console.error('Element with id "btn" not found.');
  }
});