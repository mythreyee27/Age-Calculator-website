function calculateAge() {

    let dob = document.getElementById("dob").value;

    if (!dob) {
        alert("Please select your date of birth");
        return;
    }

    let birthDate = new Date(dob);
    let today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        let lastMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        ).getDate();

        days += lastMonth;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    let result = `
        <h2>Your Age</h2>
        <p><strong>${years}</strong> Years</p>
        <p><strong>${months}</strong> Months</p>
        <p><strong>${days}</strong> Days</p>
    `;

    document.getElementById("result").innerHTML = result;
}