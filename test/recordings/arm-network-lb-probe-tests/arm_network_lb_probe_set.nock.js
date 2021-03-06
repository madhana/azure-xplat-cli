// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplattestlbLbProbe\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe\",\r\n  \"etag\": \"W/\\\"228a745d-7ae2-4129-aff4-e201c3ed9d0c\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpName\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe/frontendIPConfigurations/xplattestFrontendIpName\",\r\n        \"etag\": \"W/\\\"228a745d-7ae2-4129-aff4-e201c3ed9d0c\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/publicIPAddresses/xplatTestIpLbProbe\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"xplatTestLbProbe\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe/probes/xplatTestLbProbe\",\r\n        \"etag\": \"W/\\\"228a745d-7ae2-4129-aff4-e201c3ed9d0c\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Http\",\r\n          \"port\": 80,\r\n          \"requestPath\": \"healthcheck.aspx\",\r\n          \"intervalInSeconds\": 5,\r\n          \"numberOfProbes\": 2\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1670',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"228a745d-7ae2-4129-aff4-e201c3ed9d0c"',
  'x-ms-request-id': 'c56c9a1e-e8d0-428d-9cf0-0b100323f74d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31952',
  'x-ms-correlation-request-id': '001b3a35-d610-400d-9530-cda179c45397',
  'x-ms-routing-request-id': 'EASTASIA:20150427T091853Z:001b3a35-d610-400d-9530-cda179c45397',
  date: 'Mon, 27 Apr 2015 09:18:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplattestlbLbProbe\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe\",\r\n  \"etag\": \"W/\\\"228a745d-7ae2-4129-aff4-e201c3ed9d0c\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpName\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe/frontendIPConfigurations/xplattestFrontendIpName\",\r\n        \"etag\": \"W/\\\"228a745d-7ae2-4129-aff4-e201c3ed9d0c\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/publicIPAddresses/xplatTestIpLbProbe\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"xplatTestLbProbe\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe/probes/xplatTestLbProbe\",\r\n        \"etag\": \"W/\\\"228a745d-7ae2-4129-aff4-e201c3ed9d0c\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Http\",\r\n          \"port\": 80,\r\n          \"requestPath\": \"healthcheck.aspx\",\r\n          \"intervalInSeconds\": 5,\r\n          \"numberOfProbes\": 2\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1670',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"228a745d-7ae2-4129-aff4-e201c3ed9d0c"',
  'x-ms-request-id': 'c56c9a1e-e8d0-428d-9cf0-0b100323f74d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31952',
  'x-ms-correlation-request-id': '001b3a35-d610-400d-9530-cda179c45397',
  'x-ms-routing-request-id': 'EASTASIA:20150427T091853Z:001b3a35-d610-400d-9530-cda179c45397',
  date: 'Mon, 27 Apr 2015 09:18:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe?api-version=2015-05-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"xplattestlbLbProbe\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe\",\r\n  \"etag\": \"W/\\\"f094fd2d-bce8-4234-b41d-b7a59f0cb777\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpName\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe/frontendIPConfigurations/xplattestFrontendIpName\",\r\n        \"etag\": \"W/\\\"f094fd2d-bce8-4234-b41d-b7a59f0cb777\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/publicIPAddresses/xplatTestIpLbProbe\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"xplatTestLbProbe\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe/probes/xplatTestLbProbe\",\r\n        \"etag\": \"W/\\\"f094fd2d-bce8-4234-b41d-b7a59f0cb777\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Tcp\",\r\n          \"port\": 66,\r\n          \"intervalInSeconds\": 10,\r\n          \"numberOfProbes\": 3\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1624',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c5ded9a6-f1f9-436d-9a5c-3754736c0094',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/c5ded9a6-f1f9-436d-9a5c-3754736c0094?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1184',
  'x-ms-correlation-request-id': 'ec5bec0c-01a3-43b5-a91c-7fe7560e8b29',
  'x-ms-routing-request-id': 'EASTASIA:20150427T091855Z:ec5bec0c-01a3-43b5-a91c-7fe7560e8b29',
  date: 'Mon, 27 Apr 2015 09:18:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe?api-version=2015-05-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"xplattestlbLbProbe\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe\",\r\n  \"etag\": \"W/\\\"f094fd2d-bce8-4234-b41d-b7a59f0cb777\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpName\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe/frontendIPConfigurations/xplattestFrontendIpName\",\r\n        \"etag\": \"W/\\\"f094fd2d-bce8-4234-b41d-b7a59f0cb777\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/publicIPAddresses/xplatTestIpLbProbe\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"xplatTestLbProbe\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe/probes/xplatTestLbProbe\",\r\n        \"etag\": \"W/\\\"f094fd2d-bce8-4234-b41d-b7a59f0cb777\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Tcp\",\r\n          \"port\": 66,\r\n          \"intervalInSeconds\": 10,\r\n          \"numberOfProbes\": 3\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1624',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c5ded9a6-f1f9-436d-9a5c-3754736c0094',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/c5ded9a6-f1f9-436d-9a5c-3754736c0094?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1184',
  'x-ms-correlation-request-id': 'ec5bec0c-01a3-43b5-a91c-7fe7560e8b29',
  'x-ms-routing-request-id': 'EASTASIA:20150427T091855Z:ec5bec0c-01a3-43b5-a91c-7fe7560e8b29',
  date: 'Mon, 27 Apr 2015 09:18:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/c5ded9a6-f1f9-436d-9a5c-3754736c0094?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'bbce8b6a-cffe-4cd3-94e9-8c94a98bb8be',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31953',
  'x-ms-correlation-request-id': '29cbd5db-ab3a-49b1-bfcc-6ca65521e2f7',
  'x-ms-routing-request-id': 'EASTASIA:20150427T091856Z:29cbd5db-ab3a-49b1-bfcc-6ca65521e2f7',
  date: 'Mon, 27 Apr 2015 09:18:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/c5ded9a6-f1f9-436d-9a5c-3754736c0094?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'bbce8b6a-cffe-4cd3-94e9-8c94a98bb8be',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31953',
  'x-ms-correlation-request-id': '29cbd5db-ab3a-49b1-bfcc-6ca65521e2f7',
  'x-ms-routing-request-id': 'EASTASIA:20150427T091856Z:29cbd5db-ab3a-49b1-bfcc-6ca65521e2f7',
  date: 'Mon, 27 Apr 2015 09:18:55 GMT',
  connection: 'close' });
 return result; }]];