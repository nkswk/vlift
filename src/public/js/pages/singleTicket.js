 /* 
*Powered by author vlift
*/

define('pages/singleTicket', [
  'jquery',
  'underscore',
  'modules/socket',
  'tomarkdown',
  'modules/helpers',
  'jquery_custom'
], function ($, _, socketClient, md, helpers) {
  var st = {}
  st.init = function (callback) {
    $(document).ready(function () {
      socketClient.chat.updateOnlineBubbles()

      $('.issue-body img:not(.hasLinked)').each(function () {
        setupImageLink(this)
      })

      function setupImageLink (el) {
        var $this = $(el)
        var src = $this.attr('src')
        $this.addClass('hasLinked')
        var a = $('<a>')
          .addClass('no-ajaxy')
          .attr('href', src)
          .attr('target', '_blank')
        $this.wrap(a)
      }

      if (typeof callback === 'function') {
        return callback()
      }
    })
  }

  return st
})
