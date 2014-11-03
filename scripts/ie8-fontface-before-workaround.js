// See the Getting Started docs for more information:
// http://getbootstrap.com/getting-started/#support-ie8-font-face
// https://github.com/twbs/bootstrap/issues/13863

$(document).ready(function() {
  'use strict';
  var $style;
  $style = $('<style type="text/css">:before,:after{content:none !important}</style>');
  $('head').append($style);
  return setTimeout(function() {
    return $style.remove();
  }, 0);
});
