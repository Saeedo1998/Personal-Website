//     scrapped idea 
//     code for converting overall website style from mutiple pages to one page with panel navigation (scrapped) 
//     was in Index.html
//     https://stackoverflow.com/questions/19463651/how-to-change-the-class-of-an-html-button-at-runtime-on-its-click-event 
function activeHome() {
    //    $(document.getElementById('HomeLink')).toggleClass('active');
    $(document.getElementById('HomeLink')).addClass('active');
    //    document.getElementById('Hide').style.display='block';
    // document.getElementById('Show').style.display='none';
};

window.onload = function changePageTitle() {
    // newPageTitle = 'Saeed Badghaish';
    document.title = 'Saeed Badghaish';
}

function redirectToHome() {
    document.writeln("");
    window.location.href = "https://www.saeedo98.com/"
}

//global call (automatically called in all pages)
// window.onload = function () {
//     var url = location.href;
//     if (url = "~/Pages/Portfolio.html") {
//         location.href = "../Index.html"
//     }
// }


