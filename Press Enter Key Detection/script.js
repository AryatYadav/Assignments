const inputField = document.getElementById("inputField");
const messageDisplay = document.getElementById("messageDisplay");
const messageList = document.getElementById("messageList");

inputField.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const message = inputField.value.trim();
    if (message !== "") {
      const listItem = document.createElement("li");
      listItem.textContent = message;
      messageList.appendChild(listItem);
      messageDisplay.textContent ="You entered: " +message;
      inputField.value = "";
    }
  }
});