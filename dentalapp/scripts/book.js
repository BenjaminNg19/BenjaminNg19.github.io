function BookNow(userName, userEmail, userPhone, userRemarks, userDate, userTime){
    let url = 'https://api.sheety.co/fa1df15916bcd68f8496c823102aff92/dentistBookingApp/bookings';
    let body = {
      booking: {
        name: userName,
        email: userEmail,
        phoneNo: userPhone,
        remarks: userRemarks,
        date: userDate,
        time: userTime
      }
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers:{
          "Content-Type":"application/json"
      }
    })
    .then((response) => response.json())
    .then(json => {
      alert(json.booking.name + " added!")
    });
};

window.addEventListener("load", function(){
        let today = new Date().toISOString().slice(0, 10);
        document.getElementById("userDate").setAttribute("min", today);

        // var forms = document.getElementsByClassName('needs-validation');
        // var validation = Array.prototype.filter.call(forms, function(form)
        // {
        //   form.addEventListener('submit', function(event) 
        //   {
        //     if (form.checkValidity() === false) 
        //     {
        //       event.preventDefault();
        //       event.stopPropagation();
        //     }
        //     form.classList.add('was-validated');
        //   }, false);
        // });

    document.getElementById("bookNow").addEventListener("click",function(){
        let userName = document.getElementById("userName").value;
        let userEmail = document.getElementById("userEmail").value;
        let userPhone = document.getElementById("userPhone").value;
        let userRemarks = document.getElementById("userRemarks").value;
        let userDate = document.getElementById("userDate").value;
        let userTime = document.getElementById("userTime").value;

        BookNow(userName, userEmail, userPhone, userRemarks, userDate, userTime);
    });
});



