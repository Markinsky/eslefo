function hola() {
  document.getElementById("oiecomova").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "flex";
  });
}

function adios() {
  document.getElementById("mary").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "none";
  });
}
