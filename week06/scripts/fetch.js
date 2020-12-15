function GetBookings(){
    let url = 'https://api.sheety.co/fa1df15916bcd68f8496c823102aff92/bookingApp/bookings';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
            console.log(json.bookings);
        });
}