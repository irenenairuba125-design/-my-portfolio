const projects = [
  { title: "PartYangu - Auto Parts", desc: "Boda spare parts marketplace with inventory and sales tracking.", tech: ["JavaScript","Node.js","PostgreSQL"] },
  { title: "EduConnect Uganda", desc: "Student-teacher connection platform for remote learning.", tech: ["Express.js","Supabase","Bootstrap"] },
  { title: "Expense Tracker", desc: "Personal finance tracker with charts and monthly reports.", tech: ["JavaScript","PostgreSQL","Vercel"] }
];
const grid = document.getElementById("projectsGrid");
if(grid){
  grid.innerHTML = projects.map(p => `
    <div class="project-card">
      <h3>${p.title}</h3>
      <p style="margin:10px 0;color:#636e72;font-size:14px;">${p.desc}</p>
      <div class="skill-list" style="justify-content:flex-start;">${p.tech.map(t=>`<span>${t}</span>`).join('')}</div>
    </div>
  `).join('');
}