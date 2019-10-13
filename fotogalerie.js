$(() => {
    // + + + + + version + + + + + 
    var version = 'v0.2.c - 13-10-2019';

    var versionObj = document.getElementById("version");
    versionObj.innerHTML = "&copy; Rob vander Gali&euml;n - " + version;

    // + + + + + init images + + + + + 
    const images = [],
        imgElements = $('.thumb'),
        numOfImages = imgElements.length;

    // + + + + + get all urls from images + + + + +
    function getFileNames(element, index, array) {
        const src = element.getAttribute('src'),
            subStart = src.indexOf('_'),
            fileName = src.substr(subStart + 1);
        images.push(fileName);
    }
    imgElements.forEach(getFileNames);


    // + + + + + + + + + + EVENTS + + + + + + + + + + 
    $('#fotobalk img').on('click', function(evt) {
        /*
            get onclick-event from #fotobalk img
        */
        const thumbUrl = $('#fotobalk img').attr('src'),
            subStart = thumbUrl.indexOf('_'),
            imageUrl = thumbUrl.substr(subStart + 1);

        console.log('#fotobalk img', thumbUrl, imageUrl);
    })



    function showFoto(num, show) {
        // get object div#foto
        var fotoObj = document.getElementById("foto");
        var bijschriftObj = document.getElementById("bijschrift");

        if (show) { // show == true
            // display nieuwe foto aan de hand van de variabele num
            var imgSrc = "fotos/venetie_" + num + ".jpg"
            document.images["foto_320x240"].src = imgSrc;
            fotoObj.style.display = "block"; // show div#foto

            bijschriftObj.innerHTML = "Foto: " + imgSrc;
        } else { // show == false
            fotoObj.style.display = "none"; // hide div#foto
        }
    }

    console.log('miq ready', imgElements, typeof imgElements, images, numOfImages);
});




// TODO: dynamische html-list met foto's1