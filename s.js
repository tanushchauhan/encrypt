String.prototype.hashCode = function() {
    var hash = 0,
    i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
    chr = this.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0;
}
return hash;
}

if (window.location.href.indexOf("home") != -1){
    if(getCookie('pass') != "1292207802") if(location.href != 'https://tanushchauhan.github.io/encrypt/') location.replace('https://tanushchauhan.github.io/encrypt/')

}
else if (window.location.href.indexOf("encrypt") != -1){
    if(getCookie('pass') == "1292207802"){

    if(location.href != 'https://tanushchauhan.github.io/encrypt/home.html') location.replace('https://tanushchauhan.github.io/encrypt/home.html')
    }
    else{
    var b=document.getElementById('email').value;
    var c=document.getElementById('pass').value
    var a=(b.hashCode());
    if(a=="1292207802" && c=="admin")
      {
        setCookie("pass", a, '/');
        window.location.href="home.html";
      }
      else
      {
          alert("invalid details");
          window.location.href="index.html";
      }
        }
}
function login(){
    var b=document.getElementById('email').value;
    var c=document.getElementById('pass').value;
    var a=(c.hashCode());
    if(a=="1292207802" && b=="admin")
      {
        setCookie("pass", a, '/');
        window.location.href="home.html";
      }
      else
      {
          alert("invalid details");
          window.location.href="index.html";
      }
}
function logout(){
    removecookie("pass");
    location.replace('https://tanushchauhan.github.io/encrypt/')
}
// function removecookie(sKey, sPath, sDomain) {
//     document.cookie = encodeURIComponent(sKey) + 
//                   "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + 
//                   (sDomain ? "; domain=" + sDomain : "") + 
//                   (sPath ? "; path=" + sPath : "");
// }
function removecookie( name, path, domain ) {
  if( get_cookie( name ) ) {
    document.cookie = name + "=" +
      ((path) ? ";path="+path:"")+
      ((domain)?";domain="+domain:"") +
      ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
  }
}
function setCookie(name, value, path, options = {}) {
    options = {
        path: path,
        ...options
    }; if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    } let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value)
    for (let optionKey in options) {
        updatedCookie += "; " + optionKey
        let optionValue = options[optionKey]
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue
        }
    }
    document.cookie = updatedCookie;
}
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ))
    return matches ? decodeURIComponent(matches[1]) : undefined
}
