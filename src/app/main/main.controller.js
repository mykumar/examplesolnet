(function() {
  'use strict';

  angular
    .module('company')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr) {
    var vm = this;

    // vm.slectMethod = slectMethod;

    // function slectMethod() {
    //   console.dir("This is the hjkshdjshdjkshd");
    // }

    // vm.labels = ["January", "February", "March", "April", "May", "June", "July"];
    // vm.series = ['Series A', 'Series B'];
    // vm.data = [
    //   [65, 59, 80, 81, 56, 55, 40],
    //   [28, 48, 40, 19, 86, 27, 90]
    // ];
    // vm.onClick = function (points, evt) {
    //   console.log(points, evt);
    // };
    // vm.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
    // vm.options = {
    //   scales: {
    //     yAxes: [
    //       {
    //         id: 'y-axis-1',
    //         type: 'linear',
    //         display: true,
    //         position: 'left'
    //       },
    //       {
    //         id: 'y-axis-2',
    //         type: 'linear',
    //         display: true,
    //         position: 'right'
    //       }
    //     ]
    //   }
    // };

    vm.duglabels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    vm.dugdata = [200, 500, 100];
    vm.dugdata1 = [300, 500, 100];
    vm.dugdata2 = [500, 200, 100];

    vm.belowdata = [300, 500, 100];

    vm.belowcolors = [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ];

    vm.pielabels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    vm.peidata = [300, 500, 100];
    vm.piewcolors = [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ];

    vm.lastlabels =["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"];

    vm.lastdata = [300, 500, 100, 40, 120];


    vm.countries = [
      {name: 'Afghanistan'},
      {name: 'Aland Islands'},
      {name: 'Albania'},
      {name: 'Algeria'},
      {name: 'American Samoa'},
      {name: 'AndorrA', code: 'AD'},
      {name: 'Angola', code: 'AO'},
      {name: 'Anguilla', code: 'AI'},
      {name: 'Antarctica', code: 'AQ'},
      {name: 'Antigua and Barbuda', code: 'AG'},
      {name: 'Argentina', code: 'AR'},
      {name: 'Armenia', code: 'AM'},
      {name: 'Aruba', code: 'AW'},
      {name: 'Australia', code: 'AU'},
      {name: 'Austria', code: 'AT'}];




    vm.labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
    vm.series = ['Page Views', 'Visitors'];
    vm.data = [
        [23, 10, 13, 24, 12, 21, 19, 10, 26],
        [7, 13, 8, 10, 18, 11, 17, 9, 17]
    ];
    vm.onClick = function(points, evt) {
        console.log(points, evt);
    };
    vm.onHover = function(points) {
        if (points.length > 0) {
            console.log('Point', points[0].value);
        } else {
            console.log('No point');
        }
    };
    vm.colours = [{ // grey
            fillColor: "rgba(255,110,64,1)",
            strokeColor: "rgba(255,110,64,1)",
            pointColor: "rgba(255,110,64,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(255,110,64,1)"
    }, { // dark grey
            fillColor: "rgba(103,58,183,1)",
            strokeColor: "rgba(103,58,183,1.0)",
            pointColor: "rgba(103,58,183,1.0)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(103,58,183,1.0)"
    }];

     vm.options = {
            scaleShowVerticalLines: false,
            scaleShowLabels: true,
            scaleLineWidth: 1,
            scaleLineColor: "rgba(0,0,0,0.1)",
            scaleShowHorizontalLines: false,
            scaleGridLineWidth : 1,
            scaleShowGridLines : false,
            scaleGridLineColor : "rgba(0,0,0,0)",
            pointDotRadius : 5,
            pointHitDetectionRadius : 10,

        };

  }
})();
