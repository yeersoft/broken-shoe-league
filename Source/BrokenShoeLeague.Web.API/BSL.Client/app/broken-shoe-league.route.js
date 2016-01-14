﻿(function () {
    "use strict";
    angular
        .module('eeBrokenShoeLeague')
        .config(['$stateProvider', '$urlRouterProvider', configRouter]);

    function configRouter($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state("home", {
                url: "/",
                templateUrl: "BSL.Client/app/home/views/home.html"
            })
            .state("seasons", {
                url: "/seasons",
                templateUrl: "BSL.Client/app/season/views/seasonList.html"
            })
            .state("gallery", {
                url: "/gallery",
                templateUrl: "BSL.Client/app/gallery/views/gallery.html"
            })
            .state("news", {
                url: "/news",
                templateUrl: "BSL.Client/app/news/views/newsList.html"
            })
            .state("achievements", {
                url: "/achievements",
                templateUrl: "BSL.Client/app/achievements/views/achievements.html",
                controller: "AchievementsDetailsCtrl as vm",
                resolve:{
                    achievements : function() {
                        return [];
                    }
                }
            });
    }
})();