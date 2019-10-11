var version = 'v0.2 - 11-10-2019';

var versionObj = document.getElementById("version");
versionObj.innerHTML = "&copy; Rob vander Gali&euml;n - " + version;


function showFoto(num, show) {
    // get object div#foto
    var fotoObj = document.getElementById("foto");
    var bijschriftObj = document.getElementById("bijschrift");

    if (show) { // show == true
        // display nieuwe foto aan de hand van de variabele num
        var imgSrc = "fotos_venetie/venetie_" + num + ".jpg"
        document.images["foto_320x240"].src = imgSrc;
        fotoObj.style.display = "block"; // show div#foto

        bijschriftObj.innerHTML = "Foto: " + imgSrc;
    } else { // show == false
        fotoObj.style.display = "none"; // hide div#foto
    }
}

// TODO: dynamische html-list met foto's