// 1. Buat section show/hide dengan kelas active/disabled
const navHitungLuas = document.querySelector("nav button:nth-child(1)");
const navHitungKeliling = document.querySelector("nav button:nth-child(2)");
const sectionLuas = document.querySelector("section#luas");
const sectionKeliling = document.querySelector("section#keliling");

navHitungLuas.addEventListener("click", () => {
  sectionLuas.classList.add("active");
  sectionKeliling.classList.remove("active");
});

navHitungKeliling.addEventListener("click", () => {
  sectionKeliling.classList.add("active");
  sectionLuas.classList.remove("active");
});

// 2. Cek status aktif section & jalankan fungsi addEventListener sesuai status aktif
const btnSubmit = document.getElementsByClassName("btn-submit");
const sisi1 = document.getElementsByClassName("sisi1");
const sisi2 = document.getElementsByClassName("sisi2");

btnSubmit[0].addEventListener("click", (e) => {
  if (sectionLuas.classList.contains("active")) {
    e.preventDefault();
    hitungLuas();
  }
});

btnSubmit[1].addEventListener("click", (e) => {
  if (sectionKeliling.classList.contains("active")) {
    e.preventDefault();
    hitungKeliling();
  }
});

function hitungLuas() {
  const inputNumber = document.getElementById("numberLuas").value;
  sisi1[0].innerText = inputNumber;
  sisi2[0].innerText = inputNumber;
  document.querySelector("section#luas p:last-of-type span").innerText =
    inputNumber * inputNumber;
}

function hitungKeliling() {
  const inputNumber = document.getElementById("numberKeliling").value;
  sisi1[0].innerHTML = inputNumber;
  document.querySelector("section#keliling p:last-of-type span").innerHTML =
    4 * inputNumber;
}

// 3. Reset button
const btnReset = document.getElementsByClassName("btn-reset");

btnReset[0].addEventListener("click", () => {
  if (sectionLuas.classList.contains("active")) {
    resetLuas();
  }
});

btnReset[1].addEventListener("click", () => {
  if (sectionKeliling.classList.contains("active")) {
    resetKeliling();
  }
});

function resetLuas() {
  document.getElementById("numberLuas").value = "";
  sisi1[0].innerHTML = 0;
  sisi2[0].innerHTML = 0;
  document.querySelector("section#luas p:last-of-type span").innerText = 0;
}

function resetKeliling() {
  document.getElementById("numberKeliling").value = "";
  sisi1[0].innerText = 0;
  document.querySelector("section#keliling p:last-of-type span").innerText = 0;
}
