// Estructura de los ramos
const ramos = [
  // Ejemplo: { id: 'OD080004', nombre: 'Bases Anatómicas', prereq: [] },
  { id: "OD080004", nombre: "Bases Anatómicas", prereq: [] },
  { id: "OD080027", nombre: "Procesos Físicos para las Intervenciones Clínicas", prereq: [] },
  { id: "ODON0001", nombre: "Desarrollo de Destrezas y Autocuidado I", prereq: [] },
  { id: "ODON0003", nombre: "Procesos Químicos Clínicos I", prereq: [] },
  { id: "ODON0004", nombre: "Biología Celular y Genética", prereq: [] },
  { id: "ODON0005", nombre: "Histología General", prereq: [] },
  { id: "ODON0006", nombre: "Anatomía de Cara y Cuello", prereq: ["OD080004", "ODON0004", "ODON0005"] },
  { id: "ODON0007", nombre: "Histología Oral", prereq: ["ODON0005", "ODON0004", "OD080004"] },
  { id: "OD080029", nombre: "Procesos Físicos Clínicos II", prereq: ["OD080027"] },
  { id: "OD080030", nombre: "Procesos Químicos Clínicos II", prereq: ["ODON0003"] },
  { id: "OD080007", nombre: "Destrezas y Autocuidado II", prereq: ["ODON0001"] },
  { id: "CFG2205", nombre: "Intro a la Formación Profesional", prereq: [] },
  // Agrega el resto siguiendo el mismo formato…
];

// Estado del ramo: por defecto ninguno está aprobado
const estadoRamos = {};

const grid = document.getElementById("grid");

function crearMalla() {
  ramos.forEach(ramo => {
    const div = document.createElement("div");
    div.classList.add("ramo");
    div.innerText = ramo.nombre;
    div.id = ramo.id;

    // Deshabilitado por defecto
    if (ramo.prereq.length === 0) {
      div.classList.add("habilitado");
    }

    div.addEventListener("click", () => aprobarRamo(ramo.id));
    grid.appendChild(div);
    estadoRamos[ramo.id] = false;
  });
}

function aprobarRamo(id) {
  const div = document.getElementById(id);
  if (!div.classList.contains("habilitado") || div.classList.contains("aprobado")) return;

  div.classList.add("aprobado");
  estadoRamos[id] = true;

  // Revisar ramos dependientes
  ramos.forEach(r => {
    if (!estadoRamos[r.id]) {
      const requisitosCumplidos = r.prereq.every(req => estadoRamos[req]);
      if (requisitosCumplidos) {
        document.getElementById(r.id).classList.add("habilitado");
      }
    }
  });
}

crearMalla();

