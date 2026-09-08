const projects = [
    {
        title: "Starlight Pioneers",
        author: "Nova Games",
        desc: "A sprawling space survival MMO. Build colonies on procedurally generated planets, mine for rare dark matter, and defend against unknown alien threats in a truly infinite universe.",
        image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        funded: 145,
        days: 8,
        category: "Sci-Fi MMO"
    },
    {
        title: "Chronicles of Aethelgard",
        author: "PixelForge Studios",
        desc: "A punishing, hand-drawn 2D soulslike metroidvania. Master a complex parry system and explore interconnected cursed ruins filled with tragic lore and screen-filling bosses.",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        funded: 85,
        days: 22,
        category: "Soulslike"
    },
    {
        title: "Tactical Breach: Shadows",
        author: "Zero Point Interactive",
        desc: "A hardcore CQB simulator where every bullet counts. Plan your entry in blueprint mode, execute with your squad, and adapt to unpredictable suspect AI.",
        image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        funded: 210,
        days: 3,
        category: "Tactical FPS"
    },
    {
        title: "Harvest Haven",
        author: "Cozy Fox Games",
        desc: "Leave the corporate grind behind. Rebuild your grandfather's overgrown farm, harvest magical crops, and uncover the mysteries of the Whispering Woods in this cozy life sim.",
        image: "https://images.unsplash.com/photo-1592837330761-f3bba5f22e83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        funded: 350,
        days: 15,
        category: "Cozy Life Sim"
    }
];

function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    
    projects.forEach(project => {
        const card = document.createElement('a');
        card.href = "#";
        card.className = 'project-card';
        
        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${project.image}" alt="${project.title}" class="card-img">
            </div>
            <div class="card-content">
                <span class="category-tag">${project.category}</span>
                <h3 class="card-title">${project.title}</h3>
                <p class="card-author">by ${project.author}</p>
                <p class="card-desc">${project.desc}</p>
                
                <div class="card-stats">
                    <div class="progress-bar-container">
                        <div class="progress-bar" style="width: ${Math.min(project.funded, 100)}%"></div>
                    </div>
                    <div class="card-stats-flex">
                        <span class="percent-funded">${project.funded}% funded</span>
                        <span class="days-left">${project.days} days to go</span>
                    </div>
                </div>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

function backProject(projectName) {
    const toast = document.getElementById('toast');
    toast.textContent = `You've successfully backed ${projectName}!`;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
});
