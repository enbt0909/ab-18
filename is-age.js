document.getElementById("btn").addEventListener("click", function () {
  const input = document.getElementById("birthdate").value;
  const [day, month, year] = input.split(".");

  if (!day || !month || !year || isNaN(day) || isNaN(month) || isNaN(year)) {
    document.getElementById("age").textContent = "Bidde gib oi güldiges Geburdsdadum oi.";
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

  const p = document.getElementById("age");
  if (age >= 18) {
    p.textContent = "Dr Kunda isch König.";
  } else if (age < 0) {
    p.textContent = "Dr Kunda isch no nid mol gebora.";
  } else {
    p.innerHTML = `Dr Kunda isch minderjährig. <br> Er musch no ${18 - age} Johr warta.`;
  }
  p.textContent += ` Sei Alter beträgt ${age} Johr.`;
  console.log(p.textContent);
});