function checkNumber(event) {
  event.preventDefault();

  const numberInput = document.getElementById("numberInput").value;
  const result = document.getElementById("result");

  if (numberInput === "") {
    alert("Please enter a number.");
    return;
  }

  const number = parseInt(numberInput);

  if (isNaN(number)) {
    alert("Invalid input. Please enter a valid number.");
    return;
  }

  if (number % 2 === 0) {
    result.textContent = number + " is even.";
  } else {
    result.textContent = number + " is odd.";
  }

  if (number === 1) {
    result.textContent += " It is neither prime nor composite.";
  } else if (number === 2) {
    result.textContent += " It is a prime number.";
  } else {
    let isComposite = false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        isComposite = true;
        break;
      }
    }
    if (isComposite) {
      result.textContent += " It is a composite number.";
    } else {
      result.textContent += " It is a prime number.";
    }
  }

  // Show popup message for 3 seconds
  const popupMessage = result.textContent;
  //   alert(popupMessage);
  setTimeout(() => {
    result.textContent = "";
  }, 5000);
}

document.querySelector("form").addEventListener("submit", checkNumber);
