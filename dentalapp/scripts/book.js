
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
    
    document.getElementById("bookNow").addEventListener("click",function(){
          let userName = document.getElementById("userName").value;
          if(userName.value = null) alert("Name cannot be empty!");
          let userEmail = document.getElementById("userEmail").value;
          if(userEmail.value = null) alert("Email cannot be empty!");
          let userPhone = document.getElementById("userPhone").value;
          if(userPhone.value = null) alert("Phone No. cannot be empty!");
          let userRemarks = document.getElementById("userRemarks").value;
          if(userRemarks.value = null) alert("Remarks cannot be empty!");
          let userDate = document.getElementById("userDate").value;
          if(userDate.value = null) alert("Date cannot be empty!");
          let userTime = document.getElementById("userTime").value;
          if(userTime.value = null) alert("Time cannot be empty!");

          if(userName.value != null && userEmail.value != null && userPhone.value != null && 
             userRemarks.value != null && userDate.value != null && userTime.value != null)
          BookNow(userName, userEmail, userPhone, userRemarks, userDate, userTime);
      });
});

function isNumberKey(evt)
      {
         var charCode = (evt.which) ? evt.which : event.keyCode
         if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;

         return true;
      }




