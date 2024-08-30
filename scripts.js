document
  .querySelector("#rdv-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    fetch("http://localhost:3000/rdv", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((result) => {
        alert(result); // Affiche la réponse du serveur
      })
      .catch((error) => console.error("Erreur:", error));
  });
