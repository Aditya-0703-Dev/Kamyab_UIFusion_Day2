// JavaScript to toggle dropdown visibility and handle selection
document.querySelector('.selected').addEventListener('click', function () {
    document.querySelector('.options').classList.toggle('show');
    console.log("click mounted");
});

document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', function () {
        document.querySelector('.selected').textContent = this.textContent;
        document.querySelector('.options').classList.remove('show');
        document.getElementById('dropdownValue').value = this.getAttribute('data-value');
        console.log("Show");
    });
});
