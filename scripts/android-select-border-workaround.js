// See the Getting Started docs for more information:
// http://getbootstrap.com/getting-started/#support-android-stock-browser

(function () {
  'use strict';
  var nua = navigator.userAgent;
  var is_android = 
    ((nua.indexOf('Mozilla/5.0') > -1 && 
        nua.indexOf('Android ') > -1 && 
        nua.indexOf('AppleWebKit') > -1) && 
      nua.indexOf('Chrome') <= -1
    );
  if (is_android) {
    $('select.form-control').removeClass('form-control').css('width', '100%');
  }
})();
