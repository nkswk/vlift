 /* 
*Powered by author vlift
*/

define('pages/pageloader', ['async', 'jquery'], function (async, $) {
  var pageLoader = {}
  pageLoader.init = function (callback) {
    // Called to render component on ajax page load
    window.react.renderer(window.react.redux.store)
    window.react.redux.store.dispatch({
      type: 'NAV_CHANGE',
      payload: {
        activeItem: $('#__sidebar_route').text(),
        activeSubItem: $('#__sidebar_sub_route').text(),
        sessionUser: window.trudeskSessionService.getUser()
      }
    })

    if (!window.react.redux.store.getState().shared.sessionUser)
      window.react.redux.store.dispatch({
        type: 'SET_SESSION_USER',
        payload: {
          sessionUser: window.trudeskSessionService.getUser()
        }
      })

    require([
      'pages/dashboard',
      'pages/messages',
      'pages/accountsImport',
      'pages/groups',
      'pages/profile',
      'pages/reports',
      'pages/reportsBreakdown',
      'pages/notices',
      'pages/createNotice',
      'pages/plugins',
      'pages/logs',

      'modules/ajaximgupload',
      'modules/attachmentUpload'
    ], function (a, b, c, d, e, f, g, h, i, j, k, l, m) {
      async.parallel(
        [
          function (done) {
            a.init(done)
          },
          function (done) {
            b.init(done)
          },
          function (done) {
            c.init(done)
          },
          function (done) {
            d.init(done)
          },
          function (done) {
            e.init(done)
          },
          function (done) {
            f.init(done)
          },
          function (done) {
            g.init(done)
          },
          function (done) {
            h.init(done)
          },
          function (done) {
            i.init(done)
          },
          function (done) {
            j.init(done)
          },
          function (done) {
            k.init(done)
          },
          function (done) {
            l.init()
            m.init()

            return done()
          }
        ],
        function () {
          if (typeof callback === 'function') {
            return callback()
          }
        }
      )
    })
  }

  return pageLoader
})
