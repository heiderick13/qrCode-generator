const form = document.querySelector("form");
const download_btn = document.querySelector("#dl-btn");

function generateQRCode(e) {
  e.preventDefault();

  let url = document.getElementById("url").value;

  if (url) {
    let qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.innerHTML = "";
    new QRCode(qrcodeContainer, url);
    document.getElementById("qrcode-container").style.display = "block";
  } else {
    alert("Please enter a valid url");
  }
}

form.addEventListener("submit", (e) => {
  generateQRCode(e);
});

download_btn.addEventListener("click", (e) => {
  const screenshotTarget = document.querySelector(".qrcode");

  html2canvas(screenshotTarget).then((canvas) => {
    const baseImage = canvas.toDataURL("image/png");
    let anchor = document.createElement("a");
    anchor.setAttribute("href", baseImage);
    anchor.setAttribute("download", "qrcode.png");
    anchor.click();
    anchor.remove();
  });
});
