var patientId = "PAT-1001";
var patientAge = 65;
var consultationFee = 500;
var registrationFee = 100;

var patientAges = [22, 35, 67, 45, 29, 72, 56, 18, 64, 40];

var patient = {
    patientName: "Rahul Sharma",
    patientId: patientId,
    age: patientAge,
    gender: "Male",
    bloodGroup: "B+",
    mobile: "9876543210",
    department: "Cardiology",
    appointmentType: "Consultation",
    registrationStatus: "Confirmed",

    displayPatient: function() {
        console.log("Patient Name: " + this.patientName);
        console.log("Patient ID: " + this.patientId);
        console.log("Age: " + this.age);
        console.log("Gender: " + this.gender);
        console.log("Blood Group: " + this.bloodGroup);
        console.log("Mobile: " + this.mobile);
        console.log("Department: " + this.department);
        console.log("Registration Status: " + this.registrationStatus);
    },

    displayAppointment: function() {
        console.log("Department: " + this.department);
        console.log("Appointment Type: " + this.appointmentType);
    },

    checkAge: function() {
        if (this.age >= 60) {
            console.log("Patient is a Senior Citizen.");
        } else if (this.age >= 18) {
            console.log("Patient is an Adult.");
        } else {
            console.log("Patient is a Minor.");
        }
    }
};

function displayAgeData() {
    var minAge = patientAges[0];
    var maxAge = patientAges[0];
    var totalAge = 0;
    var seniorCount = 0;
    var below18Count = 0;

    console.log("All Patient Ages:");

    for (var i = 0; i < patientAges.length; i++) {
        console.log(patientAges[i]);

        totalAge = totalAge + patientAges[i];

        if (patientAges[i] < minAge) {
            minAge = patientAges[i];
        }

        if (patientAges[i] > maxAge) {
            maxAge = patientAges[i];
        }

        if (patientAges[i] >= 60) {
            seniorCount++;
        }

        if (patientAges[i] < 18) {
            below18Count++;
        }
    }

    var averageAge = totalAge / patientAges.length;

    console.log("Minimum Age: " + minAge);
    console.log("Maximum Age: " + maxAge);
    console.log("Average Age: " + averageAge);
    console.log("Senior Citizens: " + seniorCount);
    console.log("Patients Below 18: " + below18Count);

    console.log("Patients Above 60:");

    for (var i = 0; i < patientAges.length; i++) {
        if (patientAges[i] > 60) {
            console.log(patientAges[i]);
        }
    }
}

function validateForm() {

    var valid = true;
    var firstError = null;

    var name = document.getElementById("pname");
    var patientIdInput = document.getElementById("patient-id");
    var address = document.getElementById("padd");
    var mobile = document.getElementById("mobile");
    var email = document.getElementById("email");
    var dob = document.getElementById("dob");
    var blood = document.getElementById("blood-group");
    var test = document.getElementById("test");
    var appointment = document.getElementById("appt-date");

    // Clear errors
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("patientIdError").innerHTML = "";
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
    patientIdInput.style.border = "";
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

    // Patient ID
    var patientIdPattern = /^PAT-[0-9]{4}$/;

    if (patientIdInput.value.trim() == "") {
        document.getElementById("patientIdError").innerHTML = "Patient ID is required.";
        patientIdInput.style.border = "2px solid red";
        valid = false;

        if (firstError == null) {
            firstError = patientIdInput;
        }
    } else if (!patientIdPattern.test(patientIdInput.value.trim())) {
        document.getElementById("patientIdError").innerHTML = "Patient ID must be in the format PAT-1234.";
        patientIdInput.style.border = "2px solid red";
        valid = false;

        if (firstError == null) {
            firstError = patientIdInput;
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

        var totalAmount = consultationFee + registrationFee;
        var registrationStatus;

        if (patientAge >= 60) {
            registrationStatus = "Senior Citizen - Discount Eligible";
        } else {
            registrationStatus = "Regular Patient";
        }

        alert("Patient registration successful!");

        console.log("Patient Name: " + name.value);
        console.log("Patient ID: " + patientIdInput.value);
        console.log("Patient Age: " + patientAge);
        console.log("Consultation Fee: Rs. " + consultationFee);
        console.log("Registration Fee: Rs. " + registrationFee);
        console.log("Total Amount: Rs. " + totalAmount);
        console.log("Registration Status: " + registrationStatus);

        // Task 2
        var temperature = 39;
        var severity = "Severe";
        var emergencyStatus = "No";
        var priority;

        if (emergencyStatus == "Yes") {
            priority = "Emergency Consultation Required";
        } else if (temperature >= 39) {
            priority = "High Priority Consultation";
        } else if (severity == "Severe") {
            priority = "High Priority Consultation";
        } else if (patientAge >= 60 && severity == "Moderate") {
            priority = "Priority Consultation";
        } else {
            priority = "Regular Consultation";
        }

        console.log("Temperature: " + temperature + " C");
        console.log("Severity: " + severity);
        console.log("Emergency Status: " + emergencyStatus);
        console.log("Appointment Priority: " + priority);

        // Task 3
        patient.displayPatient();
        patient.displayAppointment();
        patient.checkAge();

        // Task 4
        displayAgeData();

        return true;
    }
}