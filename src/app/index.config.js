(function() {
  'use strict';

  angular
    .module('company')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, ChartJsProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
    // ChartJsProvider.setOptions({
    //     // colours: ['#FF6E40', '#FBC02E', '#673AB7', '#66bd78', '#f05050'],
    //     responsive: true,
    //     animateScale: true
    // });
  }

})();
