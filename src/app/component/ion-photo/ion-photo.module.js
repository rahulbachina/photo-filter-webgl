(function () {
    'use strict';
    angular
        .module('ion-photo', [
            'ionic',
            'ngCordova',
            'jrCrop'
        ])
        .constant('config', {
            path: 'app/component/ion-photo'
        })

})();