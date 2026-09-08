const projects = [
    {
        title: "Starlight Pioneers",
        author: "Nova Games",
        desc: "A massive open-world space exploration game focusing on colonization and survival mechanics.",
        image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        funded: 145,
        days: 8,
        category: "Sci-Fi MMO"
    },
    {
        title: "Chronicles of Aethelgard",
        author: "PixelForge Studios",
        desc: "A hand-drawn metroidvania inspired by classic 16-bit era titles with a modern combat system.",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        funded: 85,
        days: 22,
        category: "Metroidvania"
    },
    {
        title: "Tactical Breach: Shadows",
        author: "Zero Point Interactive",
        desc: "A hardcore tactical SWAT shooter emphasizing stealth, planning, and realism.",
        image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        funded: 210,
        days: 3,
        category: "Tactical FPS"
    },
    {
        title: "Harvest Haven",
        author: "Cozy Fox Games",
        desc: "A relaxing farming simulator where you can build your dream homestead and befriend magical creatures.",
        image: "https://images.unsplash.com/photo-1592837330761-f3bba5f22e83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        funded: 350,
        days: 15,
        category: "Farming Sim"
    },
    {
        title: "Neon Overdrive 2099",
        author: "RetroWave Arts",
        desc: "High-speed arcade racing game set in a dystopian future with a synthwave soundtrack.",
        image: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        funded: 62,
        days: 28,
        category: "Arcade Racing"
    },
    {
        title: "Dungeon Master's Realm",
        author: "Critical Hit Co.",
        desc: "A digital tabletop experience designed to make running TRPG campaigns easier and more immersive.",
        image: "https://images.unsplash.com/photo-1610484799015-84ab8e08d666?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        funded: 105,
        days: 12,
        category: "Tabletop Tool"
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
