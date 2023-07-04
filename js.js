const qs = Qs.parse(location.search.slice(1));

document.addEventListener('DOMContentLoaded', function () {
    if ('photo' in qs) {
        document.getElementById('photo').src = qs.photo;
    }
    if ('name' in qs) {
        document.getElementById('name').innerText = qs.name;
    }
    if ('subject' in qs) {
        document.getElementById('subject').innerText = qs.subject;
    }
    console.log('ready', qs)
});

function save () {
    console.log('save');
    const div = document.getElementById('main');
    printToFile(div);
}

function printToFile (div) {
    html2canvas(div, {
        logging: true,
        allowTaint: true,
        useCORS: true,
    })
        .then(function (canvas) {
            console.log('canvas');
            const myImage = canvas.toDataURL("image/png");
            downloadURI("data:" + myImage, "intro.png");
        })
        .catch(function (err) {
            console.log('error', err);
        });
}

function downloadURI (uri, name) {
    console.log('download')
    const link = document.createElement("a");
    link.download = name;
    link.href = uri;
    link.click();
    //after creating link you should delete dynamic link
    //clearDynamicLink(link);
}
