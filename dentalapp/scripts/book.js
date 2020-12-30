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