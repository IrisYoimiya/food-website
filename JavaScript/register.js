var errline = document.getElementById("error-line");
errline.innerHTML = "";

function validation(e) {
  e.preventDefault();

  var nameInput = document.getElementById("name").value;
  var alamatInput = document.getElementById("alamat").value;
  var dobInput = document.getElementById("dob").value;
  var emailInput = document.getElementById("email").value;

  var maleInput = document.getElementById("male").checked;
  var femaleInput = document.getElementById("female").checked;

  var dateNow = new Date();
  var dateInput = new Date(dobInput);

  var emailArr = emailInput.split("@");

  if (nameInput === "") {
    errline.innerHTML = "Nama tidak boleh kosong";
  } else if (dobInput === "") {
    errline.innerHTML = "Tanggal lahir tidak boleh kosong";
  } else if (dateInput > dateNow) {
    errline.innerHTML = "Tanggal lahir tidak valid";
  } else if (emailInput === "") {
    errline.innerHTML = "Email tidak boleh kosong";
  } else if (emailArr[1] !== "binus.ac.id") {
    errline.innerHTML = "Domain email harus binus.ac.id!";
  } else if (!maleInput && !femaleInput) {
    errline.innerHTML = "Gender harus dipilih";
  } else if (alamatInput === "") {
    errline.innerHTML = "Alamat tidak boleh kosong";
  } else {
    errline.innerHTML = "";
    alert("Registrasi Berhasil");
    window.location.href = "../HTML/mainMenu.html";
  }
}
