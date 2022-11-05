const placeForResults = document.getElementById("results")

new URLSearchParams(window.location.search).forEach((value, name) => {
  placeForResults.append(`${name} : ${value}`)
  placeForResults.append(document.createElement("br"))
})

document.getElementById("reset").addEventListener("click", resetBtn);
document.getElementsByClassName("submit").addEventListener("click", submitBtn);

function resetBtn() {
  alert("Page has been resetted.");
}

function submitBtn() {
  alert("If you have not been loaded to a different page, please check for any error notifications.")
}
