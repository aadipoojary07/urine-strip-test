function validateForm() {
    var valid = true;
    var firstError = null;

    var name = document.getElementById("pname");
    var address = document.getElementById("padd");
    var mobile = document.getElementById("mobile");
    var email = document.getElementById("email");
    var dob = document.getElementById("dob");
    var blood = document.getElementById("blood-group");
    var test = document.getElementById("test");
    var appointment = document.getElementById("appt-date");

    // Clear errors
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("addressError").innerHTML = "";
    document.getElementById("mobileError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("dobError").innerHTML = "";
    document.getElementById("genderError").innerHTML = "";
    document.getElementById("bloodError").innerHTML = "";
    document.getElementById("testError").innerHTML = "";
    document.getElementById("appointmentError").innerHTML = "";

    // Reset borders
    name.style.border = "";
    address.style.border = "";
    mobile.style.border = "";
    email.style.border = "";
    dob.style.border = "";
    blood.style.border = "";
    test.style.border = "";
    appointment.style.border = "";

    // Name
    var namePattern = /^[A-Za-z ]+$/;

    if (name.value.trim() == "") {
        document.getElementById("nameError").innerHTML = "Patient name is required.";
        name.style.border = "2px solid red";
        valid = false;

        if (firstError == null) {
            firstError = name;
        }
    } else if (!namePattern.test(name.value.trim())) {
        document.getElementById("nameError").innerHTML = "Name should contain only alphabets and spaces.";
        name.style.border = "2px solid red";
        valid = false;

        if (firstError == null) {
            firstError = name;
        }
    }

    // Address
    if (address.value.trim() == "") {
        document.getElementById("addressError").innerHTML = "Address is required.";
        address.style.border = "2px solid red";
        valid = false;

        if (firstError == null) {
            firstError = address;
        }
    }

    // Mobile
    var mobilePattern = /^[6-9][0-9]{9}$/;

    if (mobile.value.trim() == "") {
        document.getElementById("mobileError").innerHTML = "Mobile number is required.";
        mobile.style.border = "2px solid red";
        valid = false;

        if (firstError == null) {
            firstError = mobile;
        }
    } else if (!mobilePattern.test(mobile.value)) {
        document.getElementById("mobileError").innerHTML = "Enter a valid 10-digit Indian mobile number.";
        mobile.style.border = "2px solid red";
        valid = false;

        if (firstError == null) {
            firstError = mobile;
        }
    }

    // Email
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.value.trim() == "") {
        document.getElementById("emailError").innerHTML = "Email is required.";
        email.style.border = "2px solid red";
        valid = false;

        if (firstError == null) {
            firstError = email;
        }
    } else if (!emailPattern.test(email.value)) {
        document.getElementById("emailError").innerHTML = "Enter a valid email address.";
        email.style.border = "2px solid red";
        valid = false;

        if (firstError == null) {
            firstError = email;
        }
    }

    // Gender
    var gender = document.getElementsByName("gender");
    var genderSelected = false;

    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            genderSelected = true;
        }
    }

    if (!genderSelected) {
        document.getElementById("genderError").innerHTML = "Please select your gender.";
        valid = false;

        if (firstError == null) {
            firstError = gender[0];
        }
    }

    // Blood Group
    if (blood.value == "") {
        document.getElementById("bloodError").innerHTML = "Please select a blood group.";
        blood.style.border = "2px solid red";
        valid = false;

        if (firstError == null) {
            firstError = blood;
        }
    }

    // Test
    if (test.value == "") {
        document.getElementById("testError").innerHTML = "Please select a test.";
        test.style.border = "2px solid red";
        valid = false;

        if (firstError == null) {
            firstError = test;
        }
    }

    // Date of Birth
    if (dob.value == "") {
        document.getElementById("dobError").innerHTML = "Date of birth is required.";
        dob.style.border = "2px solid red";
        valid = false;

        if (firstError == null) {
            firstError = dob;
        }
    } else {
        var today = new Date();
        var dobDate = new Date(dob.value);
        today.setHours(0, 0, 0, 0);

        if (dobDate > today) {
            document.getElementById("dobError").innerHTML = "Date of birth cannot be in the future.";
            dob.style.border = "2px solid red";
            valid = false;

            if (firstError == null) {
                firstError = dob;
            }
        }
    }

    // Appointment Date
    if (appointment.value == "") {
        document.getElementById("appointmentError").innerHTML = "Appointment date is required.";
        appointment.style.border = "2px solid red";
        valid = false;

        if (firstError == null) {
            firstError = appointment;
        }
    } else {
        var today = new Date();
        var appointmentDate = new Date(appointment.value);
        today.setHours(0, 0, 0, 0);

        if (appointmentDate < today) {
            document.getElementById("appointmentError").innerHTML = "Appointment date cannot be before the present date.";
            appointment.style.border = "2px solid red";
            valid = false;

            if (firstError == null) {
                firstError = appointment;
            }
        }
    }

    // Final result
    if (valid == false) {
        firstError.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
        firstError.focus();
        return false;
    } else {
        alert("Patient registration successful!");
        return true;
    }
}