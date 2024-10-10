function submitData(name, email) {
  // Return the fetch promise
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  })
    .then((response) => {
      // Convert the response to JSON
      return response.json();
    })
    .then((data) => {
      // Extract the ID and append it to the DOM
      const idElement = document.createElement("p");
      idElement.textContent = `ID: ${data.id}`;
      document.body.appendChild(idElement);
    })
    .catch((error) => {
      // Append the error message to the DOM
      const errorMessage = document.createElement("p");
      errorMessage.textContent = error.message || "Unauthorized Author";
      document.body.appendChild(errorMessage);
    });
}

