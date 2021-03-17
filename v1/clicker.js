var clicker = {
    clicks: 0,
    click: function() {
        clicker.clicks += 1;
        document.getElementById("counter").innerHTML = clicker.clicks;
    }
}
