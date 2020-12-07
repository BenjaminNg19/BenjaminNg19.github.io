let ellocate = document.getElementById(locate);
ellocate.addEventListener("click",function(){
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
        let elLat = document.getElementById("lat");
        let elLong = document.getElementById("Long");

        elLat.innerHTML = "Lattitude : " + position.coords.latitude;
        elLong.innerHTML = "Longtitude : " + position.coords.longitude;
    });
} else {
    alert("Geolocation is not supported by this browser.")
  }
}
});