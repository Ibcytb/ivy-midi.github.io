(function(){
  //add css
  // var newStyle = document.createElement("link");
  // newStyle.href = 'https://cache1.value-domain.com/xrea_header.css?5';
  // newStyle.type = 'text/css';
  // newStyle.rel = 'stylesheet';
  // document.getElementsByTagName('head')[0].insertBefore(newStyle, null);

  var func = function(){
    // var body = document.body;
    // if (body == undefined) {return false;}
    var parent = document.getElementsByTagName("body")[0];
    if (parent === null) {return false;}
    //console.log(body,parent);
    var randElm = elements[Math.floor(Math.random() * elements.length)];

    var newBox = document.createElement("div");
    newBox.setAttribute('id', 'vdbanner');
    newBox.setAttribute("style","display:block!important;position:relative!important;top:0!important;left:0!important;margin:10px 0 !important;padding:0!important;text-align:center!important;");
    newBox.innerHTML = randElm;
    parent.insertBefore(newBox, parent.firstChild);
  };

  try {
    window.addEventListener("load", func, false);
  }
  catch(e) {
    window.attachEvent("onload", func);
  }
})();
