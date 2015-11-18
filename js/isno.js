function getBrowser()
{
if(navigator.userAgent.indexOf("MSIE")>0) { return "MSIE"; }
if(isFirefox=navigator.userAgent.indexOf("Firefox")>0){ return "Firefox"; }
if(isSafari=navigator.userAgent.indexOf("Safari")>0) { return "Safari"; } 
if(isCamino=navigator.userAgent.indexOf("Camino")>0){ return "Camino"; }
if(isMozilla=navigator.userAgent.indexOf("Gecko/")>0){ return "Gecko"; } 
}
var a=getBrowser();

if(a=="Safari"){alert("不好意思~由于初学此网页在非webkit内核兼容最好")}