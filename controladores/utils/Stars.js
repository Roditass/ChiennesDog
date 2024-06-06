const VALORACION_API = 'services/public/valoracion.php';
const VALORATION_FORM = document.getElementById('valorationForm');
const stars = document.querySelectorAll(".stars i");
const valoracionPedidoInput = document.getElementById("valoracionPedido");

stars.forEach((star, index1) => {
  star.addEventListener("click", () => {
    stars.forEach((star, index2) => {
      index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");

      //para ver las estrellas
      // console.log(index1 + 1 + " estrellas") //depurar
      valoracionPedidoInput.value = index1 + 1;
    });
  });
});

VALORATION_FORM.addEventListener('submit', async (event) => {
  // Se evita recargar la página web después de enviar el formulario.
  event.preventDefault();
  // Constante tipo objeto con los datos del formulario.
  const FORM = new FormData(VALORATION_FORM);   
  // Petición para guardar los datos del formulario.
  const DATA = await fetchData(VALORACION_API, 'createOpinion', FORM);
  // Se comprueba si la respuesta es satisfactoria, de lo contrario se constata si el cliente ha iniciado sesión.
  if (DATA.status) {
    // console.log("aqui fue")
  } else if (DATA.session) {
    // console.log("aqui fue 2")
      sweetAlert(2, DATA.error, false);
      
  } else {
    console.log("aqui fue 4")
      sweetAlert(3, DATA.error, true, 'login.html');
  }
});