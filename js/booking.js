//   الصفحه الرئيسيه
const modal = document.getElementById('bookingModal');
const destinationName = document.getElementById('destinationName');
const bookingForm = modal.querySelector('form');


let confirmMessage = document.getElementById("confirmBookingMessage");
if (!confirmMessage) {
    confirmMessage = document.createElement("p");
    confirmMessage.id = "confirmBookingMessage";
    confirmMessage.style.marginTop = "10px";
    confirmMessage.style.fontWeight = "bold";
    modal.querySelector(".modal-content").appendChild(confirmMessage);
}
function openBookingModal(destination) {
    destinationName.textContent = destination;
    modal.style.display = 'block';
    confirmMessage.textContent = "";
    bookingForm.reset();
}
function closeBookingModal() {
    modal.style.display = 'none';
    confirmMessage.textContent = "";
    bookingForm.reset();
}


bookingForm.addEventListener("submit", function(e) {
    e.preventDefault(); 

    confirmMessage.textContent = "تم تأكيد الطلب بنجاح ";
    confirmMessage.style.color = "blue";
    setTimeout(() => {
        bookingForm.reset();
        confirmMessage.textContent = "";
    }, 3000);
}); 
