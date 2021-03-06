/**
* Copyright (c) Microsoft.  All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var __ = require('underscore');
var util = require('util');
var utils = require('../../../util/utils');
var insightsUtils = require('../insights/insights.utils');
var auditUtils = require('./role.assignment.auditUtils');
var profile = require('../../../util/profile');
var adUtils = require('../ad/adUtils');
var rbacClients = require('../role/rbacClients');

var $ = utils.getLocaleString;

exports.init = function (cli) {
  var log = cli.output;
  var role = cli.category('role');
  var roleAssignmentComand = role.category('assignment');
  var roleAssignmentLogsCommand = roleAssignmentComand.category('changelog');

  roleAssignmentLogsCommand.command('list')
      .description($('List access change history for the subscription for the specified time i.e. who granted(or revoked) what role to whom at what scope'))
      .usage('[options]')
      .option('-b --startTime <startTime>', $('The start time of the query. E.g. "2015-08-29 15:30". If both startTime and endTime are not specified, defaults to the last one hour. Maximum query interval supported is 15 days.'))
      .option('-e --endTime <endTime>', $('The end time of the query. E.g. "2015-08-29 15:30".If both startTime and endTime are not specified, defaults to the last one hour. Maximum query interval supported is 15 days.'))
      .option('-s --subscription <subscription>', $('The subscription identifier.'))
      .execute(function (options, _) {
        roleAssignmentLogsCommand._prepareAndExecute(options, _);
      });


  roleAssignmentLogsCommand._prepareAndExecute = function (options, _) {
    var client = insightsUtils.createInsightsClient(log, options);
    var queryFilter = this._processGeneralParameters(options.startTime, options.endTime);
    queryFilter = insightsUtils.addConditionIfPresent(queryFilter, 'resourceProvider', 'Microsoft.Authorization');
    this._executeEventsCmd(client, queryFilter, insightsUtils.passAllFilter, options, _);
  };

  roleAssignmentLogsCommand._processGeneralParameters = function (startTime, endTime) {
    var queryFilter = insightsUtils.validateDateTimeRangeAndAddDefaultsEvents(startTime, endTime);
    return queryFilter;
  };

  roleAssignmentLogsCommand._executeEventsCmd = function(client, queryFilter, keepTheRecord, options, _) {
    var progress = cli.interaction.progress(util.format($('Querying \"%s\"'), queryFilter));
    var insightsResult = [];
    var subscription = profile.current.getSubscription(options.subscription);

    try {
      var response = client.eventOperations.listEvents(queryFilter, null, _);
      log.silly(__.isObject(response) ? util.inspect(response) : 'nothing in response');
      log.silly(__.isObject(response) && response.eventDataCollection ? util.inspect(response.eventDataCollection) : 'nothing in eventDataCollection');

      var recordFilter = function(element) {
        if (keepTheRecord(element)) {
          insightsResult.push(element);
        }
      };
      __.each(response.eventDataCollection.value, recordFilter);

      var nextLink = response.eventDataCollection.nextLink;
      while (nextLink) {
        log.silly('Following nextLink');
        response = client.eventOperations.listEventsNext(nextLink, _);
        __.each(response.eventDataCollection.value, recordFilter);
        nextLink = response.eventDataCollection.nextLink;
      }
    } finally {
      progress.end();
    }

    var graphClient = adUtils.getADGraphClient(subscription);
    var authzClient = rbacClients.getAuthzClient(subscription);
    if (insightsResult.length > 0) {
      progress = cli.interaction.progress('Processing');
      try {
        auditUtils.processInsightsResults(cli, log, insightsResult, subscription, graphClient, authzClient, _);
      } finally {
        log.silly('done');
        progress.end();
      }
    }
  };
};
