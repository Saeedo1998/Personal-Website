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


window.onload = function PageLoad() {
  // this will get the full URL at the address bar
  var url = window.location.href;
  // var url = window.location.href.substring(0, window.location.href.lastIndexOf("/")+1)

  if (url.includes('.html') == false) {
    url = +".html";
  }
  ChangePageTitle(url);
  UpdateActiveLink(url);

}

function ChangePageTitle(url) {
  // newPageTitle = 'Saeed Badghaish';

  if (url.includes("portfolio")) {
    document.title = 'Saeed Badghaish - Portfolio';

  } else if (url.includes("css-playground")) {
    document.title = 'Saeed Badghaish - CSS Playground';
  }
  else {
    document.title = 'Saeed Badghaish - Home';
    // document.getElementById('LinkHome').classList.add('active');
    console.log('nice1');
  }
}

function UpdateActiveLink(url) {

  // passes on every "a" tag
  $(".navbarLinks a").each(function () {
    console.log('nice2');

    // checks if its the same on the address bar
    if (url == (this.href)) {
      console.log('nice3');

      $(this).closest("li").addClass("active");
      //for making parent of submenu active
      // $(this).closest("li").parent().parent().addClass("active");

    }
  });

  // var AreAllLinksInactive = true;
  // $(".navbarLinks a").each(function (){
  //   if($(this).classList.includes('active')){
  //     AreAllLinksInactive = false;
  //   }
  // });

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

async function playAnimRotate(element) {
  document.getElementById(element).classList.add('rotate');
  await delay(1100);
  document.getElementById(element).classList.remove('rotate');

}

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

// delay(1000).then(() => console.log('ran after 1 second1 passed'));

function playEasterEggSong() {
  // const audio = new Audio("Portal/12StillAlive.mp3");
  const audio = document.getElementById('audioPortal');
  audio.play();

}

  // let isAudioPlaying = false;
  // let audioText = document.getElementById('audioText');
// function playEasterEggSong() {
//   // const audio = new Audio("Portal/12StillAlive.mp3");
//   const audio = document.getElementById('audioPortal');
//   if (isAudioPlaying == true) {
//     //do nothing
//     audioText.textContent = "Not Playing";
//   } else if (isAudioPlaying == false) {
//     audio.play();
//     audioText.textContent = "Playing";
//   } else {
//   }
//   audio.addEventListener("canplaythrough", event => {
//     /* the audio is now playable; play it if permissions allow */

//   });
//   // document.querySelector('turret').disabled = true;
// }

// function stopPlayback() {
//   if (isAudioPlaying == false) {
//     isAudioPlaying = true;

//   }

// }

// function allowPlayback() {
//   if (isAudioPlaying == true) {
//     isAudioPlaying = false;

//   }
// }

