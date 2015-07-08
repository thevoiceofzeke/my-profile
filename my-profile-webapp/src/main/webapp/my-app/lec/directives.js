/*
 * Copyright 2012, Board of Regents of the University of
 * Wisconsin System. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Board of Regents of the University of Wisconsin
 * System licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file
 * except in compliance with the License. You may obtain a
 * copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
'use strict';

define(['angular', 'require'], function(angular, require) {
  var app = angular.module('my-app.lec.directives', []);
  
  app.directive('user', function() {
      return {
        restrict : 'E',
        templateUrl : require.toUrl('./partials/user.html')
      }
    });

  app.directive('emergency', function() {
      return {
        restrict : 'E',
        templateUrl : require.toUrl('./partials/emergency.html')
      }
    });
  
  app.directive('lecAddress', function() {
      return {
        restrict : 'E',
        templateUrl : require.toUrl('./partials/address.html')
      }
    });
});