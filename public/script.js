const form = document.getElementById("registrationForm");

form.addEventListener("submit", async function(e){
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();
    let event = document.getElementById("event").value;
    let date = document.getElementById("date").value;

    if(!/^[A-Za-z]+$/.test(name)){
        alert("Enter valid name");
        return;
    }

    if(!/^[0-9]{10}$/.test(phone)){
        alert("Enter valid 10 digit number");
        return;
    }

    if(!/^[^\@s]+@[^\@s]+\.[^\@s]+$/.test(email)){
        alert("Enter valid email");
        return;    
    }

    if(date === ""){
        alert("Pick valid date");
        return;
    }

    const registration = {
        name: name,
        phone: phone,
        email: email,
        event: event,
        date: date
    };

    const response = await fetch("/register", {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(registration)
    });

    const result = await response.json();

    document.getElementById("details").innerHTML = "<h2>Registration Details<h2>" + "Name: " + result.registration.name + "<br>" + "Phone: " + result.registration.phone + "<br>" + "Email: " + result.registration.email + "<br>" + "Event: " + result.registration.event + "<br>" + "Date: " + result.registration.date;
    alert(result.message);
    form.reset();
});