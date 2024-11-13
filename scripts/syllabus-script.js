
function toggleDropdown() {
    const dropdown = document.getElementById('dropdownMenu');
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
}

// Close the dropdown if clicked outside
window.onclick = function(event) {
    const dropdownWindow = document.getElementById('dropdownMenu');
    if (!event.target.matches('.navbar a')) {
        dropdownWindow.style.display = 'none';
    }
}