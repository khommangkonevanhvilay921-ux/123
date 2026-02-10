// Function to update current time (matches header in image_31a7d8)
function updateClock() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const time = now.toLocaleTimeString('en-GB'); // 24hr format

    document.getElementById('current-time').innerText = `${day}/${month}/${year} ${time}`;
}

setInterval(updateClock, 1000);
updateClock();

// Sidebar Dropdown Toggle logic
var dropdown = document.getElementsByClassName("dropdown-btn");
for (var i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}

// Assign to Me functionality
document.querySelector('.btn-assign').addEventListener('click', function() {
    this.innerText = "ມອບໝາຍສຳເລັດ";
    this.style.background = "#4CAF50"; // Change to green
    alert("ທ່ານໄດ້ຮັບວຽກນີ້ແລ້ວ!");
});