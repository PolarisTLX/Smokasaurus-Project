function playclip() {
  if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) || (navigator.appVersion.indexOf("MSIE 8")!=-1)) {
    if (document.all)   {
      // sound turned off for development
      // document.all.sound.src = "/media/sounds/Dragon_breathing_fire.mp3";
    }
  }

  else {
    {
      var audio = document.getElementsByTagName("audio")[0];
      audio.play();
    }
  }
}
