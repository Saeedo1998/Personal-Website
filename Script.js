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
    var url = window.location.href;
    if (url.includes("Portfolio")) {
        document.title = 'Saeed Badghaish - Portfolio';
    } else if (url.includes("css-playground")){
        document.title = 'Saeed Badghaish - CSS Playground';
    }
    else {
        document.title = 'Saeed Badghaish - Home';
    }

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

function copyTextOld(text) {
    // var copyText = document.getElementById("myInput");
    var copyText = text;
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    
    var tooltip = document.getElementById("myTooltip");
    // tooltip.innerHTML = "Copied: " + copyText.value;
    tooltip.innerHTML = "Copied Successfully";

  }

  function copyTextFromElement(elementID, actionElementID) {
    let element = document.getElementById(elementID); //select the element
    let elementText = element.textContent; //get the text content from the element
    copyText(elementText); //use the copyText function below
    let actionElement = document.getElementById(actionElementID);
    actionElement.innerHTML = "Copied!";
  }

  function copyText(text) {
    navigator.clipboard.writeText(text);
  }

  function mouseLeave(elementID) {
    let element = document.getElementById(elementID); //select the element
    element.innerHTML = "Copy";
  }


