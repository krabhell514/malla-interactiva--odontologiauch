// script.js completo con todos los ramos estructurados por año y semestre
const mallaData = [
  {
    año: "Primer Año",
    semestres: [
      {
        nombre: "Semestre 1",
        ramos: [
          { id: "OD080004", nombre: "Bases Anatómicas", prereq: [] },
          { id: "OD080027", nombre: "Procesos Físicos Clínicos I", prereq: [] },
          { id: "ODON0001", nombre: "Destrezas y Autocuidado I", prereq: [] },
          { id: "ODON0003", nombre: "Procesos Químicos Clínicos I", prereq: [] },
          { id: "ODON0004", nombre: "Biología Celular y Genética", prereq: [] },
          { id: "ODON0005", nombre: "Histología General", prereq: [] },
        ]
      },
      {
        nombre: "Semestre 2",
        ramos: [
          { id: "ODON0006", nombre: "Anatomía de Cara y Cuello", prereq: ["OD080004", "ODON0004", "ODON0005"] },
          { id: "ODON0007", nombre: "Histología Oral", prereq: ["ODON0005", "ODON0004", "OD080004"] },
          { id: "OD080029", nombre: "Procesos Físicos Clínicos II", prereq: ["OD080027"] },
          { id: "OD080030", nombre: "Procesos Químicos Clínicos II", prereq: ["ODON0003"] },
          { id: "OD080007", nombre: "Destrezas y Autocuidado II", prereq: ["ODON0001"] },
          { id: "CFG2205", nombre: "Introducción a la Formación Profesional", prereq: [] },
        ]
      }
    ]
  },
  {
    año: "Segundo Año",
    semestres: [
      {
        nombre: "Semestre 3",
        ramos: [
          { id: "OD080114", nombre: "Simulaciones Profesionales I", prereq: ["OD080007", "OD080030"] },
          { id: "ODON0008", nombre: "Patología y Microbiología", prereq: ["ODON0006", "ODON0007", "OD080029"] },
          { id: "ODON0009", nombre: "Bioquímica y Fisiología I", prereq: ["OD080029", "ODON0007", "ODON0006"] },
          { id: "OD080100", nombre: "Promoción y Educación en Salud I", prereq: [] },
          { id: "OD080101", nombre: "Bases Psicosociales y Antropológicas I", prereq: [] },
        ]
      },
      {
        nombre: "Semestre 4",
        ramos: [
          { id: "OD080103", nombre: "Simulaciones Profesionales II", prereq: ["OD080114"] },
          { id: "ODON0010", nombre: "Bases Semiológicas", prereq: ["ODON0008", "ODON0009"] },
          { id: "ODON0011", nombre: "Bioquímica y Fisiología II", prereq: ["ODON0008", "ODON0009"] },
          { id: "OD080022", nombre: "Promoción y Educación en Salud II", prereq: ["OD080100", "OD080101"] },
          { id: "OD080023", nombre: "Psicosociales y Antropológicas II", prereq: ["OD080101"] },
        ]
      }
    ]
  },
  {
    año: "Tercer Año",
    semestres: [
      {
        nombre: "Semestre 5",
        ramos: [
          { id: "OD080105", nombre: "Clínica Niño y Adolescente I", prereq: ["ODON0010", "OD080103"] },
          { id: "OD080106", nombre: "Clínica Adulto I", prereq: ["OD080103", "ODON0010"] },
          { id: "OD080107", nombre: "Clínica Adulto Mayor I", prereq: ["ODON0010", "OD080103"] },
          { id: "OD080110", nombre: "Intervención Familiar y Comunitaria I", prereq: ["OD080100", "OD080101"] },
          { id: "ODON0012", nombre: "Control de Enfermedad I", prereq: ["ODON0011"] },
          { id: "ODON0013", nombre: "Gestión y Administración", prereq: ["OD080022"] },
        ]
      },
      {
        nombre: "Semestre 6",
        ramos: [
          { id: "OD080037", nombre: "Clínica Niño y Adolescente II", prereq: ["OD080105"] },
          { id: "OD080038", nombre: "Clínica Adulto II", prereq: ["OD080106", "OD080107"] },
          { id: "OD080039", nombre: "Clínica Adulto Mayor II", prereq: ["OD080106", "OD080107"] },
          { id: "OD080042", nombre: "Intervención Familiar y Comunitaria II", prereq: ["OD080110"] },
          { id: "OD080111", nombre: "Control de Enfermedad II", prereq: ["ODON0012"] },
          { id: "ODON0014", nombre: "Farmacología", prereq: ["ODON0012"] },
        ]
      }
    ]
  },
  {
    año: "Cuarto Año",
    semestres: [
      {
        nombre: "Semestre 7",
        ramos: [
          { id: "OD080047", nombre: "Mantención Estado de Salud I", prereq: ["OD080042"] },
          { id: "OD080112", nombre: "Urgencias Odontológicas I", prereq: ["OD080038", "OD080039", "OD080037", "OD080111", "ODON0014"] },
          { id: "OD080113", nombre: "Proyecto de Investigación I", prereq: [] },
          { id: "OD08100", nombre: "Clínica Niño y Adolescente III", prereq: ["OD080037"] },
          { id: "OD08200", nombre: "Clínica Adulto III", prereq: ["OD080038", "OD080039", "OD080111"] },
          { id: "OD08300", nombre: "Clínica Adulto Mayor III", prereq: ["OD080038", "OD080039", "OD080111"] },
        ]
      },
      {
        nombre: "Semestre 8",
        ramos: [
          { id: "OD080049", nombre: "Urgencias Odontológicas II", prereq: ["OD080112"] },
          { id: "OD080053", nombre: "Mantención Estado de Salud II", prereq: ["OD080047"] },
          { id: "OD080054", nombre: "Proyecto de Investigación II", prereq: ["OD080113"] },
        ]
      }
    ]
  },
  {
    año: "Quinto Año",
    semestres: [
      {
        nombre: "Semestre 9",
        ramos: [
          { id: "OD08101", nombre: "Clínica Niño y Adolescente IV", prereq: ["OD08100"] },
          { id: "OD08201", nombre: "Clínica Adulto IV", prereq: ["OD08200", "OD08300"] },
          { id: "OD08301", nombre: "Clínica Adulto Mayor IV", prereq: ["OD08200", "OD08300"] },
          { id: "OD080055", nombre: "Urgencias Odontológicas Multidisciplinarias", prereq: ["OD080049"] },
          { id: "OD080056", nombre: "Urgencias Médicas", prereq: ["OD080049"] },
          { id: "OD080061", nombre: "Mantención Estado de Salud III", prereq: ["OD08300", "OD08200", "OD080053"] },
          { id: "OD080062", nombre: "Proyecto de Investigación III", prereq: ["OD080054"] },
          { id: "OD080060", nombre: "Clínica Pacientes con Necesidades Especiales I", prereq: ["OD080049", "OD08100", "OD08200", "OD08300"] },
        ]
      },
      {
        nombre: "Semestre 10",
        ramos: [
          { id: "OD080068", nombre: "Mantención Estado de Salud IV", prereq: ["OD080061"] },
          { id: "OD080070", nombre: "Ejecución Proyecto de Investigación", prereq: ["OD080062"] },
          { id: "OD080069", nombre: "Clínica Pacientes con Necesidades Especiales II", prereq: ["OD080060"] },
        ]
      }
    ]
  },
  {
    año: "Sexto Año",
    semestres: [
      {
        nombre: "Semestres 11 y 12",
        ramos: [
          { id: "OD080072", nombre: "Trabajo de Investigación", prereq: ["OD08101", "OD08201", "OD08301", "OD080055", "OD080068", "OD080056", "OD080070"] },
          { id: "OD080071", nombre: "Internado Docente Asistencial", prereq: ["OD08101", "OD08201", "OD08301", "OD080055", "OD080056", "OD080068", "OD080069", "OD080070"] },
        ]
      }
    ]
  }
];

// Lógica de interacción igual que antes
const estadoRamos = {};
const contenedor = document.getElementById("malla");

function crearMalla() {
  mallaData.forEach(año => {
    const divAño = document.createElement("div");
    divAño.className = "año";
    divAño.innerHTML = `<h2>${año.año}</h2>`;

    año.semestres.forEach(sem => {
      const divSemestre = document.createElement("div");
      divSemestre.className = "semestre";
      divSemestre.innerHTML = `<h3>${sem.nombre}</h3>`;

      const divRamos = document.createElement("div");
      divRamos.className = "ramos";

      sem.ramos.forEach(ramo => {
        const div = document.createElement("div");
        div.classList.add("ramo");
        div.innerText = ramo.nombre;
        div.id = ramo.id;

        if (ramo.prereq.length === 0) {
          div.classList.add("habilitado");
        }

        div.addEventListener("click", () => toggleRamo(ramo.id));
        divRamos.appendChild(div);
        estadoRamos[ramo.id] = false;
      });

      divSemestre.appendChild(divRamos);
      divAño.appendChild(divSemestre);
    });

    contenedor.appendChild(divAño);
  });
}

function toggleRamo(id) {
  const div = document.getElementById(id);
  if (!div.classList.contains("habilitado") && !div.classList.contains("aprobado")) return;

  const estabaAprobado = div.classList.contains("aprobado");

  if (estabaAprobado) {
    div.classList.remove("aprobado");
    estadoRamos[id] = false;
  } else {
    div.classList.add("aprobado");
    estadoRamos[id] = true;
  }

  actualizarDesbloqueos();
}

function actualizarDesbloqueos() {
  mallaData.forEach(año => {
    año.semestres.forEach(sem => {
      sem.ramos.forEach(ramo => {
        if (estadoRamos[ramo.id]) return;
        const requisitosCumplidos = ramo.prereq.every(p => estadoRamos[p]);
        const div = document.getElementById(ramo.id);
        if (requisitosCumplidos) {
          div.classList.add("habilitado");
        } else {
          div.classList.remove("habilitado");
        }
      });
    });
  });
}

crearMalla();
