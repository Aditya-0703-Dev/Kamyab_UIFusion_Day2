// Modal and Button Elements
const modal = document.getElementById("subjectModal");
const viewButtons = document.querySelectorAll(".learn-more-button"); // Assumes multiple cards with View buttons
const closeButton = document.querySelector(".close-button");
const searchButton = document.getElementById("searchButton");
const subjectList = document.getElementById("subjectList");

// Show Modal on "View" Button Click
viewButtons.forEach(button => {
    button.addEventListener("click", () => {
        modal.style.display = "block";
        console.log("fiddu ")
    });
});

// Close Modal on Close Button Click
closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close Modal on Outside Click
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Generate Random Subjects on Search Button Click
searchButton.addEventListener("click", () => {
    const subjects = [
        "Data Structures", "Computer Networks", "Operating Systems",
        "Database Systems", "Algorithms", "Software Engineering",
        "Artificial Intelligence", "Machine Learning", "Cyber Security",
        "Cloud Computing", "Embedded Systems", "Signal Processing"
    ];
    
    // Clear previous subjects
    subjectList.innerHTML = "";

    // Create unordered list for subjects
    const ul = document.createElement("ul");
    ul.classList.add("subject-list-items");

    // Generate random subjects (up to 5)
    for (let i = 0; i < 5; i++) {
        const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
        const li = document.createElement("li");
        li.textContent = randomSubject;
        ul.appendChild(li);
    }
    subjectList.appendChild(ul);
});
