angular.module('app', [ 'ui.router' ])
  .config(function ($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/app')
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    })
  })
  .config(function ($stateProvider) {
    $stateProvider
      .state('app', {
        url: '/app',
        template: '<div class="nav"><a ui-sref="app.index">index</a><a ui-sref="app.iframe">iframe</a></div><div class="main" ui-view></div>'
      })
      .state('app.index', {
        url: '/index',
        template: '<div>index content</div>'
      })
      .state('app.iframe', {
        url: '/iframe',
        template: '<iframe src="http://localhost:8283/app/iframecontent" width="100%" height="100%" frameborder="0"></iframe>'
      })
      .state('app.iframecontent', {
        url: '/iframecontent',
        template: '<div> iframe content </div>',
        controller: function () {
          document.querySelector('.nav').style.display = 'none'
          console.log('ifram will be redirected')
        }
      })
  })

angular.bootstrap(document, ['app'])

