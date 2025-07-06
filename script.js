// Planet data object containing all information for each planet
const planetData = {
    mercury: {
        title: "Mercury",
        description: "Mercury is the smallest planet in our solar system and the closest to the Sun. It's only slightly larger than Earth's Moon and has extreme temperature variations.",
        color: "radial-gradient(circle at 25% 25%, #FFC649 0%, #FFB347 30%, #CC8800 60%, #996600 100%)",
        pattern: "radial-gradient(circle at 60% 40%, rgba(255, 255, 255, 0.1) 5%, transparent 25%), radial-gradient(circle at 20% 70%, rgba(0, 0, 0, 0.3) 8%, transparent 30%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.15) 3%, transparent 20%)",
        stats: {
            rotation: "58.6 Days",
            revolution: "87.97 Days",
            radius: "2,439 KM",
            temperature: "167°C"
        }
    },
    venus: {
        title: "Venus",
        description: "Venus is the hottest planet in our solar system with surface temperatures that can melt lead. It's often called Earth's twin due to similar size and mass.",
        color: "radial-gradient(circle at 25% 25%, #FFD700 0%, #FFA500 40%, #FF8C00 70%, #FF6347 100%)",
        pattern: "linear-gradient(45deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.2) 10%, transparent 40%)",
        stats: {
            rotation: "243 Days",
            revolution: "224.7 Days",
            radius: "6,051 KM",
            temperature: "464°C"
        }
    },
    earth: {
        title: "Earth",
        description: "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water.",
        color: "#4169E1",
        pattern: `
            radial-gradient(ellipse 40px 30px at 20% 30%, #32CD32 0%, #228B22 50%, transparent 70%),
            radial-gradient(ellipse 60px 40px at 70% 20%, #32CD32 0%, #228B22 50%, transparent 70%),
            radial-gradient(ellipse 50px 35px at 15% 70%, #32CD32 0%, #228B22 50%, transparent 70%),
            radial-gradient(ellipse 45px 25px at 85% 60%, #32CD32 0%, #228B22 50%, transparent 70%),
            radial-gradient(ellipse 35px 45px at 50% 85%, #32CD32 0%, #228B22 50%, transparent 70%),
            radial-gradient(ellipse 25px 20px at 80% 40%, #32CD32 0%, #228B22 50%, transparent 70%),
            radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.8) 8%, rgba(255, 255, 255, 0.4) 15%, transparent 25%),
            radial-gradient(circle at 70% 50%, rgba(255, 255, 255, 0.7) 12%, rgba(255, 255, 255, 0.3) 20%, transparent 30%),
            radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.6) 10%, rgba(255, 255, 255, 0.2) 18%, transparent 28%)
        `,
        stats: {
            rotation: "0.99 Days",
            revolution: "365.26 Days",
            radius: "6,371 KM",
            temperature: "16°C"
        }
    },
    mars: {
        title: "Mars",
        description: "Mars is the fourth planet from the Sun and is known as the Red Planet due to iron oxide on its surface. It has the largest volcano in the solar system.",
        color: "radial-gradient(circle at 25% 25%, #CD853F 0%, #CD5C5C 40%, #A0522D 70%, #8B4513 100%)",
        pattern: "radial-gradient(circle at 40% 60%, rgba(139, 69, 19, 0.6) 15%, transparent 40%), radial-gradient(circle at 70% 30%, rgba(160, 82, 45, 0.8) 8%, transparent 25%), radial-gradient(circle at 20% 20%, rgba(205, 133, 63, 0.4) 12%, transparent 30%)",
        stats: {
            rotation: "1.03 Days",
            revolution: "1.88 Years",
            radius: "3,389 KM",
            temperature: "-28°C"
        }
    },
    jupiter: {
        title: "Jupiter",
        description: "Jupiter is the largest planet in our solar system. It's a gas giant with a Great Red Spot that has been raging for hundreds of years.",
        color: "linear-gradient(0deg, #D2691E 0%, #CD853F 20%, #F4A460 40%, #DEB887 60%, #CD853F 80%, #D2691E 100%)",
        pattern: `
            linear-gradient(0deg, rgba(139, 69, 19, 0.3) 0%, transparent 15%, rgba(160, 82, 45, 0.4) 25%, transparent 35%, rgba(210, 105, 30, 0.3) 45%, transparent 55%, rgba(244, 164, 96, 0.4) 65%, transparent 75%, rgba(139, 69, 19, 0.3) 85%, transparent 100%),
            radial-gradient(ellipse 80px 40px at 70% 60%, #FF6347 0%, #DC143C 50%, transparent 70%)
        `,
        stats: {
            rotation: "9.93 Hours",
            revolution: "11.86 Years",
            radius: "69,911 KM",
            temperature: "-108°C"
        }
    },
    saturn: {
        title: "Saturn",
        description: "Saturn is famous for its spectacular ring system. It's a gas giant composed mostly of hydrogen and helium, and it's less dense than water.",
        color: "radial-gradient(circle at 25% 25%, #F5DEB3 0%, #DEB887 40%, #D2B48C 70%, #BC9A6A 100%)",
        pattern: "linear-gradient(0deg, rgba(188, 154, 106, 0.3) 0%, transparent 20%, rgba(222, 184, 135, 0.4) 30%, transparent 50%, rgba(245, 222, 179, 0.3) 60%, transparent 80%)",
        stats: {
            rotation: "10.8 Hours",
            revolution: "29.46 Years",
            radius: "58,232 KM",
            temperature: "-138°C"
        }
    },
    uranus: {
        title: "Uranus",
        description: "Uranus is an ice giant that rotates on its side. It's composed of water, methane, and ammonia ices, giving it a distinctive blue-green color.",
        color: "radial-gradient(circle at 25% 25%, #40E0D0 0%, #20B2AA 40%, #008B8B 70%, #006666 100%)",
        pattern: "linear-gradient(45deg, rgba(64, 224, 208, 0.2) 0%, transparent 30%, rgba(32, 178, 170, 0.3) 50%, transparent 70%)",
        stats: {
            rotation: "17.2 Hours",
            revolution: "84 Years",
            radius: "25,362 KM",
            temperature: "-195°C"
        }
    },
    neptune: {
        title: "Neptune",
        description: "Neptune is the windiest planet in our solar system with winds reaching up to 2,100 km/h. It's a deep blue ice giant located farthest from the Sun.",
        color: "radial-gradient(circle at 25% 25%, #1E90FF 0%, #4169E1 40%, #0000CD 70%, #000080 100%)",
        pattern: "radial-gradient(circle at 60% 40%, rgba(30, 144, 255, 0.4) 20%, transparent 50%), radial-gradient(circle at 20% 70%, rgba(0, 0, 205, 0.6) 15%, transparent 40%)",
        stats: {
            rotation: "16.1 Hours",
            revolution: "164.8 Years",
            radius: "24,622 KM",
            temperature: "-200°C"
        }
    }
};

// Function to generate twinkling stars in the background
function createStars() {
    const starsContainer = document.querySelector('.stars');
    const numberOfStars = 100;
    
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

// Function to update planet display when navigation is clicked
function updatePlanet(planetName) {
    const planet = planetData[planetName];
    const planetElement = document.getElementById('planet-display');
    const titleElement = document.getElementById('planet-title');
    const descriptionElement = document.getElementById('planet-description');
    const statsElement = document.getElementById('planet-stats');

    // Update planet visual with realistic textures
    planetElement.style.background = planet.color;
    
    // Add texture patterns for realistic appearance
    if (planet.pattern) {
        planetElement.style.backgroundImage = planet.pattern;
    }
    
    // Add special visual effects for certain planets
    if (planetName === 'saturn') {
        // Add ring effect for Saturn
        planetElement.style.boxShadow = `
            0 0 0 15px rgba(245, 222, 179, 0.3),
            0 0 0 18px rgba(222, 184, 135, 0.2),
            0 0 0 25px rgba(245, 222, 179, 0.15),
            0 0 0 28px rgba(222, 184, 135, 0.1),
            0 20px 40px rgba(0, 0, 0, 0.3)
        `;
    } else if (planetName === 'jupiter') {
        // Add atmospheric glow for Jupiter
        planetElement.style.boxShadow = `
            0 0 20px rgba(210, 105, 30, 0.4),
            0 20px 40px rgba(0, 0, 0, 0.3)
        `;
    } else if (planetName === 'earth') {
        // Add atmospheric glow for Earth
        planetElement.style.boxShadow = `
            0 0 25px rgba(65, 105, 225, 0.4),
            0 20px 40px rgba(0, 0, 0, 0.3)
        `;
    } else {
        // Default shadow for other planets
        planetElement.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
    }

    // Update text content
    titleElement.textContent = planet.title;
    descriptionElement.textContent = planet.description;

    // Update statistics cards
    statsElement.innerHTML = `
        <div class="stat-card">
            <div class="stat-label">Rotation Time</div>
            <div class="stat-value">${planet.stats.rotation}</div>
        </div>
        <div class="stat-card">
            <div class="stat-label">Revolution Time</div>
            <div class="stat-value">${planet.stats.revolution}</div>
        </div>
        <div class="stat-card">
            <div class="stat-label">Radius</div>
            <div class="stat-value">${planet.stats.radius}</div>
        </div>
        <div class="stat-card">
            <div class="stat-label">Average Temp</div>
            <div class="stat-value">${planet.stats.temperature}</div>
        </div>
    `;
}

// Function to handle navigation button clicks
function setupNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all navigation buttons
            navButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to the clicked button
            button.classList.add('active');
            
            // Get planet name from data attribute and update display
            const planetName = button.dataset.planet;
            updatePlanet(planetName);
        });
    });
}

// Function to add hover effects to tab buttons
function setupTabs() {
    const tabs = document.querySelectorAll('.tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('mouseenter', () => {
            tab.style.transform = 'translateX(10px)';
        });
        
        tab.addEventListener('mouseleave', () => {
            tab.style.transform = 'translateX(0)';
        });
    });
}

// Main initialization function
function init() {
    createStars();
    setupNavigation();
    setupTabs();
    updatePlanet('mercury'); // Start with Mercury as default
}

// Run initialization when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);

// Add smooth scrolling for better user experience
document.addEventListener('scroll', () => {
    const stars = document.querySelectorAll('.star');
    const scrollTop = window.pageYOffset;
    
    stars.forEach((star, index) => {
        const speed = (index % 3 + 1) * 0.5;
        star.style.transform = `translateY(${scrollTop * speed}px)`;
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    const navButtons = document.querySelectorAll('.nav-btn');
    const activeButton = document.querySelector('.nav-btn.active');
    const currentIndex = Array.from(navButtons).indexOf(activeButton);
    
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % navButtons.length;
        navButtons[nextIndex].click();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        const prevIndex = (currentIndex - 1 + navButtons.length) % navButtons.length;
        navButtons[prevIndex].click();
    }
});