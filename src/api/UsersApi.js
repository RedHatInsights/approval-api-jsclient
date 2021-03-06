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


import ApiClient from "../ApiClient";
import ActionIn from '../model/ActionIn';
import ActionOut from '../model/ActionOut';
import RequestOut from '../model/RequestOut';
import StageOut from '../model/StageOut';

/**
* Users service.
* @module api/UsersApi
* @version 1.0.0
*/
export default class UsersApi {

    /**
    * Constructs a new UsersApi. 
    * @alias module:api/UsersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Add an action to a given stage
     * Add an action to a given stage
     * @param {Number} stageId Id of stage
     * @param {module:model/ActionIn} actionIn Action object that will be added
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ActionOut} and HTTP response
     */
    addActionWithHttpInfo(stageId, actionIn) {
      let postBody = actionIn;

      // verify the required parameter 'stageId' is set
      if (stageId === undefined || stageId === null) {
        throw new Error("Missing the required parameter 'stageId' when calling addAction");
      }

      // verify the required parameter 'actionIn' is set
      if (actionIn === undefined || actionIn === null) {
        throw new Error("Missing the required parameter 'actionIn' when calling addAction");
      }


      let pathParams = {
        'stage_id': stageId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKey_auth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ActionOut;

      return this.apiClient.callApi(
        '/stages/{stage_id}/actions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Add an action to a given stage
     * Add an action to a given stage
     * @param {Number} stageId Id of stage
     * @param {module:model/ActionIn} actionIn Action object that will be added
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ActionOut}
     */
    addAction(stageId, actionIn) {
      return this.addActionWithHttpInfo(stageId, actionIn)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Return an user action by id
     * Return an user action by id
     * @param {Number} id Query by id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ActionOut} and HTTP response
     */
    fetchActionByIdWithHttpInfo(id) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling fetchActionById");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKey_auth'];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = ActionOut;

      return this.apiClient.callApi(
        '/actions/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Return an user action by id
     * Return an user action by id
     * @param {Number} id Query by id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ActionOut}
     */
    fetchActionById(id) {
      return this.fetchActionByIdWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Return actions in a given stage
     * List all actions of a stage
     * @param {Number} stageId Id of stage
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ActionOut>} and HTTP response
     */
    fetchActionsByStageIdWithHttpInfo(stageId) {
      let postBody = null;

      // verify the required parameter 'stageId' is set
      if (stageId === undefined || stageId === null) {
        throw new Error("Missing the required parameter 'stageId' when calling fetchActionsByStageId");
      }


      let pathParams = {
        'stage_id': stageId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKey_auth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ActionOut];

      return this.apiClient.callApi(
        '/stages/{stage_id}/actions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Return actions in a given stage
     * List all actions of a stage
     * @param {Number} stageId Id of stage
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ActionOut>}
     */
    fetchActionsByStageId(stageId) {
      return this.fetchActionsByStageIdWithHttpInfo(stageId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Return an approval request by given id
     * Return an approval request by given id
     * @param {Number} id Query by id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RequestOut} and HTTP response
     */
    fetchRequestByIdWithHttpInfo(id) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling fetchRequestById");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKey_auth'];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = RequestOut;

      return this.apiClient.callApi(
        '/requests/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Return an approval request by given id
     * Return an approval request by given id
     * @param {Number} id Query by id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RequestOut}
     */
    fetchRequestById(id) {
      return this.fetchRequestByIdWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Return an array of stages by given request id
     * Return an array of stages by given request id
     * @param {Number} requestId Id of request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/StageOut>} and HTTP response
     */
    fetchRequestStagesWithHttpInfo(requestId) {
      let postBody = null;

      // verify the required parameter 'requestId' is set
      if (requestId === undefined || requestId === null) {
        throw new Error("Missing the required parameter 'requestId' when calling fetchRequestStages");
      }


      let pathParams = {
        'request_id': requestId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKey_auth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [StageOut];

      return this.apiClient.callApi(
        '/requests/{request_id}/stages', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Return an array of stages by given request id
     * Return an array of stages by given request id
     * @param {Number} requestId Id of request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/StageOut>}
     */
    fetchRequestStages(requestId) {
      return this.fetchRequestStagesWithHttpInfo(requestId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Return an array of approval requests
     * Return an array of requests
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.decision Fetch item by given decision (undecided, approved, denied)
     * @param {Array.<module:model/String>} opts.state Fetch item by given state (pending, skipped, notified, finished)
     * @param {String} opts.requester Fetch item by given requester
     * @param {Number} opts.limit How many items to return at one time (max 1000) (default to 20)
     * @param {Number} opts.offset Starting Offset (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/RequestOut>} and HTTP response
     */
    fetchRequestsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'decision': this.apiClient.buildCollectionParam(opts['decision'], 'multi'),
        'state': this.apiClient.buildCollectionParam(opts['state'], 'multi'),
        'requester': opts['requester'],
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKey_auth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [RequestOut];

      return this.apiClient.callApi(
        '/requests', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Return an array of approval requests
     * Return an array of requests
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.decision Fetch item by given decision (undecided, approved, denied)
     * @param {Array.<module:model/String>} opts.state Fetch item by given state (pending, skipped, notified, finished)
     * @param {String} opts.requester Fetch item by given requester
     * @param {Number} opts.limit How many items to return at one time (max 1000) (default to 20)
     * @param {Number} opts.offset Starting Offset (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/RequestOut>}
     */
    fetchRequests(opts) {
      return this.fetchRequestsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
