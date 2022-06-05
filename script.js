function uncheckAll() {
  $('input[type="checkbox"]:checked').prop("checked", false);
}
document.querySelector("#uncheckBtn").addEventListener("click", uncheckAll);
