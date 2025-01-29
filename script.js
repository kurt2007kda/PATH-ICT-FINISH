// DOM Elements
const jobSearchForm = document.getElementById('jobSearchForm');
const jobSearchInput = document.getElementById('jobSearchInput');
const jobResults = document.getElementById('jobResults');
const searchHistory = document.getElementById('searchHistory');
const clearHistoryButton = document.getElementById('clearHistory');

// Placeholder job data for demonstration purposes
const mockJobs = [
    { 
        title: "Web Developer", 
        link: "https://docs.google.com/forms/d/e/1FAIpQLScvE4AsWOcmU0HJfaFTMlRczkBqcsrko744oOChkGgjpTUMUg/viewform?usp=dialog", 
        description: "Design, build, and maintain websites. They ensure websites are visually appealing, functional, and responsive across devices.",
        additionalDescription: "A web developer is a skilled professional who builds and maintains websites and web applications, ensuring they function efficiently, look appealing, and deliver a seamless user experience.",
        skill: "HTML, CSS, JavaScript, and frameworks like React or Angular"
    },
     { 
        title: "Data Analyst", 
        link: "https://docs.google.com/forms/d/e/1FAIpQLSclaNWk8sx1MH1iwMxc8_P436VBnXDnMpIT5JNION30rNtiLw/viewform?usp=dialog",
        description: "Analyze and interpret data to solve business challenges.",
        additionalDescription: "Vital role in decision-making by analyzing data.",
        skill: "SQL, Python, Excel, Tableau"
    },
    { 
        title: "IT Support Specialist", 
        link: "https://docs.google.com/forms/d/e/1FAIpQLSdJZN9Wowl98SKrEkbremuUbVigTjFukUBxcH32F1pOocQgoA/viewform?usp=dialog",
        description: "Help maintain and troubleshoot IT systems.",
        additionalDescription: "Provide technical assistance to users, troubleshoot hardware and software issues, and maintain IT systems.",
        skill: "Troubleshooting, Windows/MacOS, and basic networking."
    },
    { 
        title: "Software Engineer", 
        link: "https://docs.google.com/forms/d/e/1FAIpQLSck9XLCAknYYX4hQNvHyX7YBp0OOFHlu_H3Zumo4Cz2duWJuQ/viewform?usp=dialog",
        description: "Develop software solutions and applications.",
        additionalDescription: "Develop, test, and maintain software applications and systems. They solve complex problems using programming languages and algorithms.",
        skill: "Python, Java, C++, problem-solving, and software architecture."
    },
    { 
        title: "Systems Engineer", 
        link: "https://docs.google.com/forms/d/e/1FAIpQLSezJu1lDbJ8mwkgHj8faPGYg9t1Ot8WiMqqEhMIUqzozaBMag/viewform?usp=dialog",
        description: "Design and manage system infrastructure.",
        additionalDescription: "Design and integrate complex systems within an organization, ensuring they meet technical and operational requirements.",
        skill: "Systems architecture, cloud platforms, and networking."
    },
     { 
        title: "Software Developer", 
        link: "https://docs.google.com/forms/d/e/1FAIpQLSeOC0mdUC6MsOHs-mrzeKgF4DSFivyHgNjxe1UyH2Ear7RE0Q/viewform?usp=dialog",
        description: "Write and maintain software code.",
        additionalDescription: "Designs, develops, tests, and maintains software applications, playing a critical role in creating technology solutions.",
        skill: "Coding languages, problem-solving, and critical-thinking skills."
    },
    { 
        title: "Business Analyst", 
        link: "https://docs.google.com/forms/d/e/1FAIpQLScZ9Fc8IBIz0KaYfQU8jksGc1TG7a1BQDzQUlv6VerLjfGI_g/viewform?usp=dialog",
        description: "Identify business needs and recommend solutions.",
        additionalDescription: "Acts as a bridge between business needs and technical solutions, analyzing processes to propose improvements and technology integration.",
        skill: "Communication, data analysis, and requirements documentation."
    },
    { 
        title: "Network Engineer", 
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfxl2xuvx-cBhKztkNlcU9TEiCp2e94PNHTYcXB6Fa5lkg9Qw/viewform?usp=dialog",
        description: "Build and maintain networks.",
        additionalDescription: "Design, implement, and maintain an organization’s network infrastructure for optimal performance and security.",
        skill: "Routing, switching, firewalls, and network protocols."
    },
    { 
        title: "Technical Support Specialist", 
        link: "https://docs.google.com/forms/d/e/1FAIpQLScKmz9bQY7A57iHthBByty6AreGdyKT5hNLt2KmW8kagwDoMA/viewform?usp=dialog",
        description: "Assist users with technical issues.", 
        additionalDescription: "Assist customers or employees with technical issues related to hardware, software, or IT services.",
        skill: "Communication, troubleshooting, and product knowledge."
    },
    { 
        title: "Game Designer", 
        link: "https://docs.google.com/forms/d/e/1FAIpQLSeRB7m53hgBK6BP4HNEQrDBf9wmk8swLCp1Bbg16UruEVmCzQ/viewform?usp=dialog",
        description: "Design video game mechanics and systems.",
        additionalDescription: "Design the structure, mechanics, and storylines of video games. They often collaborate with developers and artists.",
        skill: "Creativity, game engines like Unity/Unreal, and coding knowledge."
    }, 
    { 
        title: "Programmer", 
        link: "https://docs.google.com/forms/d/e/1FAIpQLSdAdNW3mcM6z5LoRZLUEiI9ntiwwXkKCC1QnnKht7mRdsnH3g/viewform?usp=dialog",
        description: "Write and debug code for software programs.",
        additionalDescription: "Write code to create software applications, scripts, and tools to solve specific problems or automate tasks.",
        skill: "Proficiency in programming languages like Python, Java, or C#."
    },
    { 
        title: "Cybersecurity Analyst", 
        link: "https://docs.google.com/forms/d/e/1FAIpQLSdtrw6yaKYUzrQa4gACo7dMOCJwWbSV_mQZHffOuFgAqSw5sQ/viewform?usp=dialog",
        description: "Monitor and protect systems from cyber threats.",
        additionalDescription: "Protect an organization’s systems and data from cyber threats by monitoring, identifying, and mitigating risks.",
        skill: "Network security, ethical hacking, and tools like firewalls and SIEM systems."
    },
    { 
        title: "Systems Administrator", 
        link: "https://docs.google.com/forms/d/e/1FAIpQLSew4AFhIdWrUPBrFRd4AQQDECqK1tFiwqkVCNk09p-EFHjHlw/viewform?usp=dialog",
        description: "Manage IT infrastructure and servers.",
        additionalDescription: "Manage and maintain an organization's IT systems, including servers, networks, and software.",
        skill: "Server management, virtualization, and scripting."
    },
    { 
        title: "Computer Service Technician", 
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfhmwZrvcgIVHLkkN7OTgMVJ21Z7B6GhTsaBNM6JpJzcl4o4w/viewform?usp=dialog",
        description: "Repair and maintain computer hardware.",
        additionalDescription: "Repair and maintain computer hardware, including desktops, laptops, and peripherals.",
        skill: "Hardware diagnostics, soldering, and customer service."
    },
    { 
        title: "Network Administrator", 
        link: "https://docs.google.com/forms/d/e/1FAIpQLSc-sMCjIThniM5UxjeRViekcrL1L5jcAi48ZQ-0rZJocbag7Q/viewform?usp=dialog",
        description: "Oversee and manage network systems.",
        additionalDescription: "Oversee the daily operations of an organization's network, ensuring connectivity and addressing any issues.",
        skill: "Network configurations, monitoring tools, and basic troubleshooting."
    },
     { 
        title: "Artificial Intelligence/Machine Learning Engineer", 
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfw7TO2SgDADy6mcF7trQq4k3FPT4A20yzc97-r2dz3rNGgAg/viewform?usp=dialog", 
        description: "Build AI and machine learning models to automate tasks and provide intelligent insights.",
        additionalDescription: "Work on creating intelligent systems by leveraging AI and ML techniques to optimize processes and make data-driven decisions.",
        skill: "Python, TensorFlow, PyTorch, and data science."
    },
     { 
        title: "DevOps Engineer", 
        link: "https://docs.google.com/forms/d/e/1FAIpQLSc5AZe1Q8mzJ7rHZxkBGRei0vuc6UT5YWTiDxq1NQsIg0M-4Q/viewform?usp=dialog", 
        description: "Work on the integration of development and operations to streamline software delivery using automation and CI/CD pipelines.",
        additionalDescription: "Automate and optimize processes to improve development cycles and software deployment.",
        skill: "Docker, Kubernetes, Jenkins, and scripting languages."
    },
     { 
        title: "Cloud Engineer", 
        link: "https://docs.google.com/forms/d/e/1FAIpQLScJ0zA0i4ddGiNBJcxRa8afKyyd92xWRT6DX34MC-wgAufHIg/viewform?usp=dialog", 
        description: "Design, deploy, and maintain cloud-based infrastructure and services (e.g., AWS, Azure, or Google Cloud).",
        additionalDescription: "Focus on building scalable cloud-based environments and ensuring data security in the cloud.",
        skill: "Cloud platforms, DevOps, and infrastructure automation tools."
    },
     { 
        title: "Database Administrator (DBA)", 
        link: "https://docs.google.com/forms/d/e/1FAIpQLSeouuixSs3xOCVH1kuJDwYs8nny-MZ11iEXOMMSti7fMTIYVw/viewform?usp=dialog", 
        description: "Manage and maintain databases to ensure availability, security, and performance.",
        additionalDescription: "Responsible for the organization, storage, and maintenance of databases, ensuring data is easily accessible and secure.",
        skill: "SQL, database management systems (e.g., MySQL, Oracle), and backup strategies."
    },
     { 
        title: "IT Project Manager", 
        link: "https://docs.google.com/forms/d/e/1FAIpQLSdn5YKrsfiKUj9c53hF6LUOwRgu0EKgebdmKBzNJG-f5aHytg/viewform?usp=dialog", 
        description: "Plan, execute, and oversee IT projects to ensure they are completed on time and within budget.",
        additionalDescription: "Responsible for leading IT projects, managing timelines, resources, and ensuring the successful delivery of solutions.",
        skill: "Leadership, Agile/Scrum, and project management tools like Jira."
    }
];

// Load search history
let history = JSON.parse(localStorage.getItem('searchHistory')) || [];

function saveHistory() {
    localStorage.setItem('searchHistory', JSON.stringify(history));
}

function renderHistory() {
    searchHistory.innerHTML = history.length
        ? history.map(term => `<li>${term}</li>`).join('')
        : '<li>No search history.</li>';
}

function renderJobs(jobs) {
    jobResults.innerHTML = jobs.length
        ? jobs.map(job => `
            <li>
                <a href="${job.link}" target="_blank"><strong>${job.title}</strong></a>
                <p><strong>Description:</strong> ${job.description}</p>
                <p><strong>Skills:</strong> ${job.skill}</p>
            </li>
        `).join('')
        : '<li>No results found.</li>';
}

function handleSearch(query) {
    if (!query.trim()) {
        alert("Please enter a search term.");
        return;
    }

    if (!history.includes(query)) {
        history.push(query);
        saveHistory();
        renderHistory();
    }

    const results = mockJobs.filter(job => job.title.toLowerCase().includes(query.toLowerCase()));
    renderJobs(results);
}

if (jobSearchForm) {
    jobSearchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        handleSearch(jobSearchInput.value);
        jobSearchInput.value = '';
    });
}

if (clearHistoryButton) {
    clearHistoryButton.addEventListener('click', () => {
        history = [];
        saveHistory();
        renderHistory();
        renderJobs(mockJobs); // Reset jobs when history is cleared
    });
}

// Initial rendering
renderHistory();
renderJobs(mockJobs);
function renderJobs(jobs) {
    jobResults.innerHTML = jobs.length
        ? jobs.map(job => `
            <li>
                <a href="${job.link}" target="_blank"><strong>${job.title}</strong></a>
                <p><strong>Description:</strong> ${job.description}</p>
                <p><strong>Additional Info:</strong> ${job.additionalDescription}</p>
                <p><strong>Skills:</strong> ${job.skill}</p>
            </li>
        `).join('')
        : '<li>No results found.</li>';
}
