/**
 * Insights Service Approval APIs
 * APIs to query approval service
 *
 * OpenAPI spec version: 1.0.0
 * Contact: support@redhat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.InsightsServiceApprovalApIs);
  }
}(this, function(expect, InsightsServiceApprovalApIs) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new InsightsServiceApprovalApIs.Group();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Group', function() {
    it('should create an instance of Group', function() {
      // uncomment below and update the code to test Group
      //var instane = new InsightsServiceApprovalApIs.Group();
      //expect(instance).to.be.a(InsightsServiceApprovalApIs.Group);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new InsightsServiceApprovalApIs.Group();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new InsightsServiceApprovalApIs.Group();
      //expect(instance).to.be();
    });

    it('should have the property userIds (base name: "user_ids")', function() {
      // uncomment below and update the code to test the property userIds
      //var instane = new InsightsServiceApprovalApIs.Group();
      //expect(instance).to.be();
    });

  });

}));
