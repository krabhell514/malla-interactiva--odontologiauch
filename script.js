const ramos = [
  // PRIMER AÑO - Semestre 1
  { id: "OD080004", nombre: "Bases Anatómicas", prereq: [] },
  { id: "OD080027", nombre: "Procesos Físicos para las Intervenciones Clínicas", prereq: [] },
  { id: "ODON0001", nombre: "Desarrollo de Destrezas y Autocuidado I", prereq: [] },
  { id: "ODON0003", nombre: "Procesos Químicos Clínicos I", prereq: [] },
  { id: "ODON0004", nombre: "Biología Celular y Genética", prereq: [] },
  { id: "ODON0005", nombre: "Histología General", prereq: [] },

  // PRIMER AÑO - Semestre 2
  { id: "ODON0006", nombre: "Anatomía de Cara y Cuello", prereq: ["OD080004", "ODON0004", "ODON0005"] },
  { id: "ODON0007", nombre: "Histología Oral", prereq: ["ODON0005", "ODON0004", "OD080004"] },
  { id: "OD080029", nombre: "Procesos Físicos Clínicos II", prereq: ["OD080027"] },
  { id: "OD080030", nombre: "Procesos Químicos Clínicos II", prereq: ["ODON0003"] },
  { id: "OD080007", nombre: "Destrezas y Autocuidado II", prereq: ["ODON0001"] },
  { id: "CFG2205", nombre: "Intro a la Formación Profesional Odontológica", prereq: [] },

  // SEGUNDO AÑO - Semestre 3
  { id: "OD080114", nombre: "Simulaciones Profesionales I", prereq: ["OD080007", "OD080030"] },
  { id: "ODON0008", nombre: "Patología y Microbiología", prereq: ["ODON0006", "ODON0007", "OD080029"] },
  { id: "ODON0009", nombre: "Bioquímica y Fisiología I", prereq: ["OD080029", "ODON0007", "ODON0006"] },
  { id: "OD080100", nombre: "Promoción y Educación en Salud I", prereq: [] },
  { id: "OD080101", nombre: "Bases Psicosociales y Antropológicas I", prereq: [] },

  // SEGUNDO AÑO - Semestre 4
  { id: "OD080103", nombre: "Simulaciones Profesionales II", prereq: ["OD080114"] },
  { id: "ODON0010", nombre: "Bases Semiológicas", prereq: ["ODON0008", "ODON0009"] },
  { id: "ODON0011", nombre: "Bioquímica y Fisiología II", prereq: ["ODON0008", "ODON0009"] },
  { id: "OD080022", nombre: "Promoción y Educación en Salud II", prereq: ["OD080100", "OD080101"] },
  { id: "OD080023", nombre: "Bases Psicosociales y Antropológicas II", prereq: ["OD080101"] },

  // TERCER AÑO - Semestre 5
  { id: "OD080105", nombre: "Clínica Niño y Adolescente I", prereq: ["ODON0010", "OD080103"] },
  { id: "OD080106", nombre: "Clínica Adulto I", prereq: ["OD080103", "ODON0010"] },
  { id: "OD080107", nombre: "Clínica Adulto Mayor I", prereq: ["ODON0010", "OD080103"] },
  { id: "OD080110", nombre: "Intervención Familiar y Comunitaria I", prereq: ["OD080100", "OD080101"] },
  { id: "ODON0012", nombre: "Control de Enfermedad I", prereq: ["ODON0011"] },
  { id: "ODON0013", nombre: "Gestión y Administración", prereq: ["OD080022"] },

  // TERCER AÑO - Semestre 6
  { id: "OD080037", nombre: "Clínica Niño y Adolescente II", prereq: ["OD080105"] },
  { id: "OD080038", nombre: "Clínica Adulto II", prereq: ["OD080106", "OD080107"] },
  { id: "OD080039", nombre: "Clínica Adulto Mayor II", prereq: ["OD080106", "OD080107"] },
  { id: "OD080042", nombre: "Intervención Familiar y Comunitaria II", prereq: ["OD080110"] },
  { id: "OD080111", nombre: "Control de Enfermedad II", prereq: ["ODON0012"] },
  { id: "ODON0014", nombre: "Farmacología", prereq: ["ODON0012"] },

  // CUARTO AÑO - Semestre 7
  { id: "OD080047", nombre: "Mantención Estado de Salud I", prereq: ["OD080042"] },
  { id: "OD080112", nombre: "Urgencias Odontológicas I", prereq: ["OD080038", "OD080039", "OD080037", "OD080111", "ODON0014"] },
  { id: "OD080113", nombre: "Proyecto de Investigación I", prereq: [] },
  { id: "OD08100", nombre: "Clínica Niño y Adolescente III", prereq: ["OD080037"] },
  { id: "OD08200", nombre: "Clínica Adulto III", prereq: ["OD080038", "OD080039", "OD080111"] },
  { id: "OD08300", nombre: "Clínica Adulto Mayor III", prereq: ["OD080038", "OD080039", "OD080111"] },

  // CUARTO AÑO - Semestre 8
  { id: "OD080049", nombre: "Urgencias Odontológicas II", prereq: ["OD080112"] },
  { id: "OD080053", nombre: "Mantención Estado de Salud II", prereq: ["OD080047"] },
  { id: "OD080054", nombre: "Proyecto de Investigación II", prereq: ["OD080113"] },

  // QUINTO AÑO - Semestres 9 y 10
  { id: "OD08101", nombre: "Clínica Niño y Adolescente IV", prereq: ["OD08100"] },
  { id: "OD08201", nombre: "Clínica Adulto IV", prereq: ["OD08200", "OD08300"] },
  { id: "OD08301", nombre: "Clínica Adulto Mayor IV", prereq: ["OD08200", "OD08300"] },

  // QUINTO AÑO - Semestre 9
  { id: "OD080055", nombre: "Urgencias Odontológicas Multidisciplinarias", prereq: ["OD080049"] },
  { id: "OD080056", nombre: "Urgencias Médicas", prereq: ["OD080049"] },
  { id: "OD080061", nombre: "Mantención Estado de Salud III", prereq: ["OD08300", "OD08200", "OD080053"] },
  { id: "OD080062", nombre: "Proyecto de Investigación III", prereq: ["OD080054"] },
  { id: "OD080060", nombre: "Clínica Paciente con Necesidades Especiales I", prereq: ["OD080049", "OD08100", "OD08200", "OD08300"] },

  // QUINTO AÑO - Semestre 10
  { id: "OD080068", nombre: "Mantención Estado de Salud IV", prereq: ["OD080061"] },
  { id: "OD080070", nombre: "Ejecución Proyecto de Investigación", prereq: ["OD080062"] },
  { id: "OD080069", nombre: "Clínica Paciente con Necesidades Especiales II", prereq: ["OD080060"] },

  // SEXTO AÑO - Semestres 11 y 12
  { id: "OD080072", nombre: "Trabajo de Investigación", prereq: ["OD08101", "OD08201", "OD08301", "OD080055", "OD080068", "OD080056", "OD080070"] },
  { id: "OD080071", nombre: "Internado Docente Asistencial", prereq: ["OD08101", "OD08201", "OD08301", "OD080055", "OD080056", "OD080068", "OD080069", "OD080070"] }
];

// Estado de aprobación de ramos
const estadoRamos = {};
const grid = document.getElementById("grid");

function crearMalla() {
  ramos.forEach(ramo => {
    const div = document.createElement("div");
    div.classList.add("ramo");
    div.innerText = ramo.nombre;
    div.id = ramo.id;

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

  // Desbloquear ramos que dependen de este
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
