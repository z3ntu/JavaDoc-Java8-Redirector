
var manifest = chrome.runtime.getManifest();
var args = ["%c JavaDoc Redirector%c v"+manifest.version+"%c by%c " + manifest.author + " %c "+manifest.homepage_url,"background: #222;color: #bada55", "background: #222;color: #c0ffee","background: #222;color: #bada55", "background: #222;color: #c0ffee", ""];
console.log.apply(console, args);
var pattern = /javase\/.\/docs/;
var j8url = document.URL.replace(pattern, "javase/8/docs");
if(!(j8url === document.URL)){
  document.location.href = j8url;
}
