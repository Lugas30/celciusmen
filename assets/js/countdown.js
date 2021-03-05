

    // Set the date we're counting down to
    // Tanggal dan bulan untuk parameter pengaktifan quicksale
    // Waktu untuk inputan durasi quicksale !
    var countDate = new Date("Jun 5, 2021 16:40:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var gap = countDate - now;

        //var d = Math.floor(gap / (1000 * 60 * 60 * 24));
        var h = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var m = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
        var s = Math.floor((gap % (1000 * 60)) / 1000);

        //document.getElementById("day").innerText = d;
        document.getElementById("hour").innerText = h;
        document.getElementById("minute").innerText = m;
        document.getElementById("second").innerText = s;


  // If the count down is finished, write some text
  if (gap < 0) {
    clearInterval(x);
    //document.getElementById("day").innerText = 0;
    document.getElementById("hour").innerText = 0;
    document.getElementById("minute").innerText = 0;
    document.getElementById("second").innerText = 0;
    document.getElementById("demo").innerText = "EXP";
  }
}, 1000);