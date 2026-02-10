// 1. ຈັດການ Dropdown ແລະ ໝູນລູກສອນ
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

// 2. ອັບເດດເວລາປະຈຸບັນ
function updateClock() {
    const now = new Date();
    const timeStr = now.toLocaleDateString('lo-LA') + ' ' + now.toLocaleTimeString('en-GB');
    document.getElementById('current-time').innerText = timeStr;
}
setInterval(updateClock, 1000);
updateClock();

// 3. ປຸ່ມ Assign to Me
document.getElementById('assignBtn').addEventListener('click', function() {
    this.innerText = "ຮັບຜິດຊອບແລ້ວ";
    this.style.background = "#28a745"; // ປ່ຽນເປັນສີຂຽວ
    alert("ທ່ານໄດ້ຮັບມອບໝາຍໃຫ້ກວດສອບຄຳຮ້ອງນີ້ແລ້ວ");
});

// 4. ປ້ອງກັນການຄລິກຂວາ (Right-click)
document.addEventListener('contextmenu', e => e.preventDefault());
// 5. ຟັງຊັນສຳລັບປຸ່ມ Approve ແລະ Reject (ຂຽນຕໍ່ຈາກຂໍ້ 4 ຂອງເຈົ້າ)
function handleAction(status) {
    if(status === 'approve') {
        const confirmApprove = confirm("ທ່ານແນ່ໃຈບໍ່ທີ່ຈະອະນຸມັດຄຳຮ້ອງນີ້?");
        if(confirmApprove) {
            alert("ອະນຸມັດສຳເລັດແລ້ວ!");
            // ເພີ່ມ logic ສົ່ງ data ໄປ API ບ່ອນນີ້
        }
    } else {
        const reason = prompt("ກະລຸນາລະບຸເຫດຜົນໃນການປະຕິເສດ:");
        if(reason) {
            alert("ປະຕິເສດຄຳຮ້ອງເນື່ອງຈາກ: " + reason);
        }
    }
}

// 6. ຕົວຢ່າງການດຶງຂໍ້ມູນທີ່ຢູ່ມາສະແດງ (ຖ້າໃຊ້ກັບ API ໃນອະນາຄົດ)
const addressData = {
    village: "ບ້ານ ໂພນສະຫວັນ",
    district: "ເມືອງ ສີສັດຕະນາກ",
    province: "ນະຄອນຫຼວງວຽງຈັນ"
};

console.log("ກວດສອບທີ່ຢູ່ລູກຄ້າ:", addressData.village, addressData.district);