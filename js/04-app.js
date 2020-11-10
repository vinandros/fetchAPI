const loadDataBtn = document.querySelector("#cargarAPI");

loadDataBtn.addEventListener("click", () => {
  const url = "https://picsum.photos/list";

  fetch(url)
    .then((res) => res.json())
    .then((data) => showData(data))
    .catch((error) => console.log(error));
});

function showData(arr) {
  const contenido = document.querySelector(".contenido");
  console.log(arr);
  let html = "";
  arr.forEach((empleado) => {
    const { author, id, format, post_url } = empleado;
    html += `
          <p>Autor: ${author}</p>
          <a href="${post_url}" target="_blank">Ver Imagem</a>
      `;
  });
  contenido.innerHTML = html;
}
