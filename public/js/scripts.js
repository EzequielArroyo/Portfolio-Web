function toggleMenu() {
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('active');
}

const selectedSkills = new Set();

function filterProjectsBySkills() {
  const projects = document.querySelectorAll('.project-item');

  projects.forEach(project => {
    const tags = project.dataset.tags.toLowerCase().split(' ');

    if (selectedSkills.size > 0) {
      const matches = [...selectedSkills].some(skill => tags.includes(skill));
      project.classList.toggle('dimmed', !matches);
    } else {
      project.classList.remove('dimmed');
    }
  });
}


function setupSkillFilter() {
  const skillButtons = document.querySelectorAll('.skill-item');

  skillButtons.forEach(button => {
    button.addEventListener('click', () => {
      const skill = button.dataset.skill.toLowerCase();

      // Toggle la selección
      if (selectedSkills.has(skill)) {
        selectedSkills.delete(skill);
        button.classList.remove('selected');
      } else {
        selectedSkills.add(skill);
        button.classList.add('selected');
      }

      filterProjectsBySkills();
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setupSkillFilter();
  setUpMenuToggle();
  setUpThemeToggle();
});

function setUpMenuToggle() {
  const menuButton = document.querySelector('.menu-toggle');
  menuButton.addEventListener('click', toggleMenu);
}

function setUpThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  themeToggle.addEventListener('click', toggleTheme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const newTheme = current === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
}
function setTheme(theme){
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  updateButtonIcon(theme);
}
function updateButtonIcon(theme){
  const icon = document.querySelector('#themeToggle i');
  if (icon) {
    icon.classList.toggle('fa-moon', theme !== 'dark');
    icon.classList.toggle('fa-sun', theme === 'dark');
  }
}