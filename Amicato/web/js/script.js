function sendMail() {
    var link = "mailto:bart.certyn@hotmail.com"
            + "?cc=myCCaddress@example.com"
            + "&subject=" + escape("This is my subject")
            + "&body=" + escape(document.getElementById('myText').value)
            ;

    window.location.href = link;
}

