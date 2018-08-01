const form = document.getElementById("vote-form");

form.addEventListener("submit", e => {
  const choise = document.querySelector("input[name=os]:checked").value;
  const data = { os: choise };

  fetch("http://localhost:3000/poll", {
    method: "post",
    body: JSON.stringify(data),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .then(err => console.log(err));

  e.preventDefault();
});
