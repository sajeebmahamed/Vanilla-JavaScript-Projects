// get location from browser
if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
    console.log('geolocation IS NOT available');
}
// set browser location
function setPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    initMap(latitude, longitude)
}
// if user denied location permission show error
function showError(error) {
    alert('User denied to give geolocation permission! Please allow location')
}

// integrate api with map
let map;
function initMap(latitude, longitude) {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: latitude, lng: longitude },
        zoom: 8,
    });

    // get modal from index.htmls
    let modal = document.querySelector('#modal')

    // modal with infowindow
    let infowindow = new google.maps.InfoWindow({
        content: modal
    });
    // set marker
    let marker = new google.maps.Marker({
        position: map.center,
        map: map
    });
    // handle from event with marker
    document.querySelector('#lat').value = latitude
    document.querySelector('#lng').value = longitude
    marker.addListener('click', function () {
        modal.style.display = "block";
        infowindow.open(map, marker);

        let btnn = document.querySelector('#btnn')
        btnn.addEventListener('click', (e) => {
            e.preventDefault()
            let lat = document.querySelector('#lat').value
            let lng = document.querySelector('#lng').value
            let uName = document.querySelector('#name').value

            /**  log to console */
            console.log(`Latitude : ${lat} Longitude : ${lng} User Name : ${uName} `);
        })
        
        // clear name input after submit
        document.querySelector('#name').value = ''

    });

    map.addListener("center_changed", () => {
        window.setTimeout(() => {
            map.panTo(marker.getPosition());
        }, 3000);
    });
    marker.addListener("click", () => {
        map.setZoom(11);
        map.setCenter(marker.getPosition());
    });

}
