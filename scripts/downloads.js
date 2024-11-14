const papersContainer = document.getElementById("papers-container");
const filterButton = document.getElementById("filter-button");

filterButton.addEventListener("click", () => {
    // Example list of question papers
    const questionPapers = [
        { title: "CSE - Data Structures - 2023", year: "2023", department: "CSE", course: "BTech" },
        { title: "ECE - Signal Processing - 2022", year: "2022", department: "ECE", course: "BTech" },
        { title: "EE - Power Systems - 2024", year: "2024", department: "EE", course: "BTech" },
        // Add more papers as needed
    ];

    // Clear previous results
    papersContainer.innerHTML = "";

    // Get filter values
    const selectedYear = document.getElementById("year").value;
    const selectedDepartment = document.getElementById("department").value;
    const selectedCourse = document.getElementById("course").value;

    // Filter question papers
    const filteredPapers = questionPapers.filter(
        paper => paper.year === selectedYear && paper.department === selectedDepartment && paper.course === selectedCourse
    );

    // Display filtered papers
    if (filteredPapers.length > 0) {
        filteredPapers.forEach(paper => {
            const paperItem = document.createElement("div");
            paperItem.classList.add("paper-item");
            paperItem.innerHTML = `
                <h3>${paper.title}</h3>
                <button onclick="downloadPaper('${paper.title}')">Download</button>
            `;
            papersContainer.appendChild(paperItem);
        });
    } else {
        papersContainer.innerHTML = "<p>No question papers found for the selected criteria.</p>";
    }
});

// Mock download function
function downloadPaper(title) {
    alert(`Downloading: ${title}`);
}
