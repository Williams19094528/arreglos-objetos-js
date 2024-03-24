document.addEventListener("DOMContentLoaded", function () {
  const propiedadesVentaContainer = document.getElementById(
    "propiedadesVentaContainer"
  );

  propiedades_venta.forEach((propiedad) => {
    const propiedadHTML = `
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src="${
              propiedad.src
            }" class="card-img-top" alt="Imagen del departamento">
            <div class="card-body">
              <h5 class="card-title">${propiedad.nombre}</h5>
              <p class="card-text">${propiedad.descripcion}</p>
              <p><i class="fas fa-map-marker-alt"></i> ${
                propiedad.ubicacion
              }</p>
              <p><i class="fas fa-bed"></i> ${
                propiedad.habitaciones
              } Habitaciones</p>
              <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
              ${
                propiedad.smoke
                  ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>'
                  : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'
              }
              ${
                propiedad.pets
                  ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>'
                  : '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'
              }
            </div>
          </div>
        </div>
      `;
    propiedadesVentaContainer.insertAdjacentHTML("beforeend", propiedadHTML);
  });
});

const propiedades_venta = [
  {
    nombre: "Apartamento con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion: "Apartamento con impresionante vista al mar.",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 2,
    costo: 200000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Penthouse en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion: "Penthouse ubicado en el corazón de la ciudad.",
    ubicacion: "789 Downtown Blvd, Urban Center, CA 34567",
    habitaciones: 4,
    costo: 500000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Chalet en las montañas",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion: "Chalet encantador con vistas a las montañas.",
    ubicacion: "101 Mountain View Road, Summit Valley, CA 67890",
    habitaciones: 5,
    costo: 400000,
    smoke: true,
    pets: true,
  },
];
