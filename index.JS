document.getElementById("dog").value = "Woof";

{
  var theImages = [
    {
      src:
        "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjc-bPLvMDiAhUN6qQKHVYOCR8QjRx6BAgBEAU&url=https%3A%2F%2Fwww.woef.be%2F8-redenen-waarom-een-hond-je-leven-beter-maakt%2F&psig=AOvVaw3CLXr9fTRO2bgbY_VVyT3z&ust=1559210151028144"
    }
  ];

  var preBuffer = [];
  for (var i = 0, j = theImages.length; i < j; i++) {
    preBuffer[i] = new Image();
    preBuffer[i].src = theImages[i].src;
    preBuffer[i].width = theImages[i].width;
    preBuffer[i].height = theImages[i].height;
  }

  // create random image number
  function getRandomInt(min, max) {
    //  return Math.floor(Math.random() * (max - min + 1)) + min;

    imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return preBuffer[imn];
  }

  // 0 is first image,   preBuffer.length - 1) is  last image

  var newImage = getRandomInt(0, preBuffer.length - 1);

  // remove the previous images
  var images = document.getElementsByTagName("img");
  var l = images.length;
  for (var p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
  }
  // display the image
  document.body.appendChild(newImage);
}
