'use strict';
require('./index.css')
require('vendor/angular-ui-router/release/angular-ui-router.min.js');
require('node_modules/font-awesome/css/font-awesome.min.css');

angular.module('app', ['ui.router']);

//路由配置
require('pages/common/config/router.js');

//service
require('pages/service/loadInfoService.js');

//js路径
require('pages/main/mainCtrl.js');
require('pages/reg/regCtrl.js');
require('pages/home/homeCtrl.js');
require('pages/positionDetail/positionCtrl.js');
require('pages/company/companyCtrl.js');
require('pages/search/seaCtrl.js');
require('pages/work-part/workPartCtrl.js');
require('pages/work-part/mostpageCtrl.js');
require('pages/work-part/pushJobCtrl.js');
require('pages/work-part/pageInfoCtrl.js');
require('pages/work-part/pushJobnewJobCtrl.js');
require('pages/work-part/pushJobjobListCtrl.js');