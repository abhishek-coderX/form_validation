var form = document.querySelector("form");
var inp1 = document.getElementById("name");
var inp2 = document.getElementById("email");
var inp3 = document.getElementById("contact");
var inp4 = document.getElementById("password");
var inp5 = document.getElementById("confirmpassword");
var h3 = document.querySelector("h3");
var btn = document.getElementById("submit-button");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    if (inp1.value === '' || inp2.value === '' || inp3.value === '' || inp4.value === '' || inp5.value === '') {
        alert("ERROR: SOME FIELDS ARE BLANK");
    } else if (inp3.value.length !== 10) {
        alert("ERROR: WRITE 10 DIGIT NUMBER");
    } else if (isNaN(inp3.value)) {
        alert("ERROR: ONLY NUMERIC VALUES ARE ALLOWED");
    } else if (inp4.value !== inp5.value) {
        alert("ERROR: PASSWORD AND CONFIRM PASSWORD SHOULD BE SAME");
    } else if (!/^[a-zA-Z0-9]{6}$/.test(inp4.value)) {
        alert("ERROR: PASSWORD MUST BE 6 DIGITS LONG AND ALPHA-NUMERIC");
    } else {
        h3.textContent = "Registration Successful!";
        h3.style.color = "green";
        btn.style.backgroundColor = "green";
    }
});
