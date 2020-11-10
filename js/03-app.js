const loadDataBtn = document.querySelector("#cargarJSONArray");

loadDataBtn.addEventListener("click", () => {
  const url = "data/empleados.json";

  fetch(url)
    .then((res) => res.json())
    .then((data) => showData(data))
    .catch((error) => console.log(error));
});

function showData(arr) {
  const contenido = document.querySelector(".contenido");
  let html = "";
  arr.forEach((empleado) => {
    const { empresa, id, nombre, trabajo } = empleado;
    html += `
        <p>id: ${id}</p>
        <p>Nombre: ${nombre}</p>
        <p>Trabajo: ${trabajo}</p>
        <p>Empresa: ${empresa}</p>
    `;
  });
  contenido.innerHTML = html;
}
