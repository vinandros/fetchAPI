const loadTxtBtn = document.querySelector("#cargarTxt");

loadTxtBtn.addEventListener("click", () => {
  const url = "data/datos.txt";
  fetch(url)
    .then((res) => {
      console.log(res);
      console.log(res.status);
      console.log(res.statusText);
      console.log(res.url);
      console.log(res.type);
      return res.text();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
});
