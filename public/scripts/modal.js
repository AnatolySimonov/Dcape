const callDialog = document.getElementById("callDialog");

const callLink = document.querySelector(".call");

callLink.addEventListener("click", () => {
  callDialog.showModal();
});

document.getElementById("cancel").addEventListener("click", () => {
  callDialog.close();
});

document.getElementById("call").addEventListener("click", () => {
  callDialog.close();
});
