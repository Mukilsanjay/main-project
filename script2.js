const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const educationInput = document.getElementById('education');
const skillsInput = document.getElementById('skills');
const experienceInput = document.getElementById('experience');
const projectsInput = document.getElementById('projects');
const rName = document.getElementById('r-name');
const rEmail = document.getElementById('r-email');
const rPhone = document.getElementById('r-phone');
const rEducation = document.getElementById('r-education');
const rSkills = document.getElementById('r-skills');
const rExperience = document.getElementById('r-experience');
const rProjects = document.getElementById('r-projects');
function updateResume() {
  rName.textContent = nameInput.value || "Your Name";
  rEmail.textContent = emailInput.value;
  rPhone.textContent = phoneInput.value;
  rEducation.textContent = educationInput.value;
  rExperience.textContent = experienceInput.value;
  rProjects.textContent = projectsInput.value;
  rSkills.innerHTML = "";
  const skills = skillsInput.value.split(',');
  skills.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill.trim();
    rSkills.appendChild(li);
  });
}
[nameInput, emailInput, phoneInput, educationInput, skillsInput, experienceInput, projectsInput]
.forEach(input => input.addEventListener('input', updateResume));

function downloadPDF() {
  const resume = document.getElementById('resume');
  html2pdf().from(resume).save("my_resume.pdf");
}