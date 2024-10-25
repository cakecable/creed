
var _0x6e80c2 = (function () {
    var _0x358032 = true
    return function (_0x56584f, _0x2fa78b) {
      var _0x312886 = _0x358032
        ? function () {
            if (_0x2fa78b) {
              var _0x7714bc = _0x2fa78b.apply(_0x56584f, arguments)
              return (_0x2fa78b = null), _0x7714bc
            }
          }
        : function () {}
      return (_0x358032 = false), _0x312886
    }
  })(),
  _0x4263ba = _0x6e80c2(this, function () {
    var _0x27e1eb
    try {
      var _0x36dd09 = Function(
        'return (function() {}.constructor("return this")( ));'
      )
      _0x27e1eb = _0x36dd09()
    } catch (_0x482a3b) {
      _0x27e1eb = window
    }
    var _0x2fa992 = (_0x27e1eb.console = _0x27e1eb.console || {}),
      _0x75a11d = [
        'log',
        'warn',
        'info',
        'error',
        'exception',
        'table',
        'trace',
      ]
    for (var _0x1becfd = 0; _0x1becfd < _0x75a11d.length; _0x1becfd++) {
      var _0x8823b6 = _0x6e80c2.constructor.prototype.bind(_0x6e80c2)
      var _0x3f61f8 = _0x75a11d[_0x1becfd]
      var _0x380fa6 = _0x2fa992[_0x3f61f8] || _0x8823b6
      _0x8823b6['__proto__'] = _0x6e80c2.bind(_0x6e80c2)
      _0x8823b6.toString = _0x380fa6.toString.bind(_0x380fa6)
      _0x2fa992[_0x3f61f8] = _0x8823b6
    }
  })
_0x4263ba()
setInterval(function () {
  console.log('Nice protection piam! -x677')
  console.log('૮\uA4B0 \u02F6\u2022 \u0F1D \u2022\u02F6\uA4B1ა \u2661')
}, 100)
$(window).blur(function () {
  document.title = 'come back stupid'
})
$(window).focus(function () {
  document.title = '?'
})
if ($(window).width() > 1280) {
  $.ajax({
    type: 'GET',
    url: 'assets/config.json',
    dataType: 'json',
    success: function (_0x5ad2e6) {
      profiles = _0x5ad2e6.profiles
      $.each(profiles, function (_0x3ebdca, _0x5df7a0) {
        var _0xff53b1 = _0x5df7a0.bg
        _0xff53b1.includes('.mp4') &&
          $('.video').append(
            '<video class="vid ' +
              _0x5df7a0.name +
              '" src="assets/img/bgs/' +
              _0x5df7a0.bg +
              '" loop></video>'
          )
      })
    },
  })
  var _0x5d3603 = {
    outerStyle: 'disable',
    hoverEffect: 'pointer-overlay',
    hoverItemMove: true,
    defaultCursor: true,
    outerWidth: 21,
    outerHeight: 21,
  }
  options = _0x5d3603
  magicMouse(options)
  setInterval(function () {
    $('img').attr('draggable', false)
  }, 1000)
  var audio = $('audio').get(0)
  audio.volume = $('#volume-slider').val() / 100
  $('#volume-slider').on('input', function () {
    var _0x36c443 = $(this).val() / 100
    audio.volume = _0x36c443
  })
  var initialScale = 1,
    maxScale = 1.2,
    scrollOffset = 1500
  $(window).scroll(function () {
    var _0x5678b1 = $(window).scrollTop(),
      _0x2ce88e = initialScale + _0x5678b1 / scrollOffset
    _0x2ce88e > maxScale && (_0x2ce88e = maxScale)
    $('.bg').css({ transform: 'scale(' + _0x2ce88e + ')' })
  })
}
