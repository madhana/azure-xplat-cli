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

var should = require('should');
var util = require('util');
var testUtils = require('../../../util/util');
var CLITest = require('../../../framework/arm-cli-test');
var testprefix = 'arm-network-gateway-local-network-tests';
var localNetworkPrefix = 'xplatTestVnet';
var networkTestUtil = require('../../../util/networkTestUtil');
var groupName, location,
  groupPrefix = 'xplatTestGrpLocalNetwork',
  AddPrefix = '10.0.0.0/23',
  AddPrefixN = '10.0.1.0/23',
  ipAddress = '10.0.0.0',
  tags = 'tag1=val1',
  tagsN = 'tag2=val2';
var requiredEnvironment = [{
  name: 'AZURE_VM_TEST_LOCATION',
  defaultValue: 'eastus'
}];

describe('arm', function() {
  describe('network', function() {
    var suite,
      retry = 5;
    var networkUtil = new networkTestUtil();
    before(function(done) {
      suite = new CLITest(this, testprefix, requiredEnvironment);
      suite.setupSuite(function() {
        location = process.env.AZURE_VM_TEST_LOCATION;
        groupName = suite.isMocked ? groupPrefix : suite.generateId(groupPrefix, null);
        localNetworkPrefix = suite.isMocked ? localNetworkPrefix : suite.generateId(localNetworkPrefix, null);
        done();
      });
    });
    after(function(done) {
      networkUtil.deleteUsedGroup(groupName, suite, function() {
        suite.teardownSuite(done);
      });
    });
    beforeEach(function(done) {
      suite.setupTest(done);
    });
    afterEach(function(done) {
      suite.teardownTest(done);
    });

    describe('gateway local-network', function() {

      it('create should pass', function(done) {
        networkUtil.createGroup(groupName, location, suite, function() {
          var cmd = util.format('network gateway local-network create -g %s -n %s -l %s -a %s -i %s -t %s --json', groupName, localNetworkPrefix, location, AddPrefix, ipAddress, tags).split(' ');
          testUtils.executeCommand(suite, retry, cmd, function(result) {
            result.exitStatus.should.equal(0);
            done();
          });
        });
      });
      it('set should modify local-network', function(done) {
        var cmd = util.format('network gateway local-network set -g %s -n %s -a %s -t %s --json', groupName, localNetworkPrefix, AddPrefixN, tagsN).split(' ');
        testUtils.executeCommand(suite, retry, cmd, function(result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('show should display details of local-network', function(done) {
        var cmd = util.format('network gateway local-network show -g %s -n %s --json', groupName, localNetworkPrefix).split(' ');
        testUtils.executeCommand(suite, retry, cmd, function(result) {
          result.exitStatus.should.equal(0);
          var allresources = JSON.parse(result.text);
          allresources.name.should.equal(localNetworkPrefix);
          done();
        });
      });
      it('list should dispaly all local-networks in a given resource group', function(done) {
        var cmd = util.format('network gateway local-network list -g %s --json', groupName).split(' ');
        testUtils.executeCommand(suite, retry, cmd, function(result) {
          result.exitStatus.should.equal(0);
          var allResources = JSON.parse(result.text);
          allResources.some(function(res) {
            return res.name === localNetworkPrefix;
          }).should.be.true;
          done();
        });
      });
      it('delete should delete local-network', function(done) {
        var cmd = util.format('network gateway local-network delete -g %s -n %s --json --quiet', groupName, localNetworkPrefix).split(' ');
        testUtils.executeCommand(suite, retry, cmd, function(result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });

    });
  });
});