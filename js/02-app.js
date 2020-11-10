const loadDataBtn = document.querySelector("#cargarJSON");

loadDataBtn.addEventListener("click", () => {
  const url = "data/empleado.json";

  fetch(url)
    .then((res) => res.json())
    .then((data) => showData(data))
    .catch((error) => console.log(error));
});

function showData({ empresa, id, nombre, trabajo }) {
  const contenido = document.querySelector(".contenido");
  contenido.innerHTML = `
        <p>id: ${id}</p>
        <p>Nombre: ${nombre}</p>
        <p>Trabajo: ${trabajo}</p>
        <p>Empresa: ${empresa}</p>
    `;
}
