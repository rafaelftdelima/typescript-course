interface Course {
  nome: string,
  horas: number,
  nivel: 'iniciante' | 'avancado',
  aulas: number,
  gratuito: boolean,
  idAulas: Array<number>,
  tags: Array<string>,
};

function showCourses(data: Array<Course>) {
  const container = document.querySelector('div');

  if (container) {
    data.forEach((course) => {
      container.innerHTML += `
        <div class="item">
          <h1${course.nivel === 'iniciante' ? ' class="free"' : ''}>${course.nome}</h1>
          <div>
            <p>${course.horas}hs</p>
            ${course.gratuito ? '<p class="free">Gratuito</p>' : ''}
          </div>
          <ul>
            ${
              course.tags.reduce((result, current) => {
                return result += `<li>${current}</li>`;
              }, '')
            }
          </ul>
        </div>
      `
    });
  }
}

async function fetchCourses() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const data = await response.json();

  showCourses(data);
}

fetchCourses();
