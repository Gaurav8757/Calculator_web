const display = document.getElementById("display");
const buttons = document.querySelectorAll(".button");
let string = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("active");
    const buttonValue = button.dataset.value;
    setTimeout(() => {
      button.classList.remove(
        "active"
      ); /* remove active class after short delay */
    }, 150);

    if (buttonValue === "AC") {
      string = "";
      display.innerText = string;
    } else if (buttonValue === "+/-") {
      // Implement plus/minus functionality here
    } else if (buttonValue === "%") {
      string = eval(string / 100);
      display.innerText = string;
    } else if (buttonValue === "=") {
      string = eval(string);
      display.innerText = string;
    } else {
      string += buttonValue;
      display.innerText = string;
    }
  });
});

document.addEventListener("keydown", (event) => {
  const key = event.key;
  let buttonValue;

  switch (key) {
    case "0":
      buttonValue = "0";
      break;
    case "1":
      buttonValue = "1";
      break;
    case "2":
      buttonValue = "2";
      break;
    case "3":
      buttonValue = "3";
      break;
    case "4":
      buttonValue = "4";
      break;
    case "5":
      buttonValue = "5";
      break;
    case "6":
      buttonValue = "6";
      break;
    case "7":
      buttonValue = "7";
      break;
    case "8":
      buttonValue = "8";
      break;
    case "9":
      buttonValue = "9";
      break;
    case ".":
      buttonValue = ".";
      break;
    case "+":
      buttonValue = "+";
      break;
    case "-":
      buttonValue = "-";
      break;
    case "*":
      buttonValue = "*";
      break;
    case "/":
      buttonValue = "/";
      break;
    case "Enter":
      buttonValue = "=";
      break;
    case "Backspace":
      buttonValue = "AC";
      break;
    case "%":
      buttonValue = "%";
      break;
    case "_":
      buttonValue = "+/-";
      break;
    default:
      return;
  }

  // Replace the rest of the code with the corresponding logic using buttonValue
  // ...
  const button = Array.from(buttons).find(
    (button) => button.dataset.value === buttonValue
  );
  button.classList.add("active");
  setTimeout(() => {
    button.classList.remove("active");
  }, 150);

  // Update string and display based on buttonValue
  if (buttonValue === "AC") {
    string = "";
    display.innerText = string;
  } else if (buttonValue === "+/-") {
    // Implement plus/minus functionality here
  } else if (buttonValue === "%") {
    string = eval(string / 100);
    display.innerText = string;
  } else if (buttonValue === "=") {
    string = eval(string);
    display.innerText = string;
  } else {
    string += buttonValue;
    display.innerText = string;
  }
});
