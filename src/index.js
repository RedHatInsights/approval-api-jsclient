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


import ApiClient from './ApiClient';
import Action from './model/Action';
import Group from './model/Group';
import GroupOperationParameters from './model/GroupOperationParameters';
import Request from './model/Request';
import Stage from './model/Stage';
import Template from './model/Template';
import User from './model/User';
import Workflow from './model/Workflow';
import WorkflowParameters from './model/WorkflowParameters';
import AdminsApi from './api/AdminsApi';
import RequestersApi from './api/RequestersApi';
import UsersApi from './api/UsersApi';


/**
* APIs_to_query_approval_service.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var InsightsServiceApprovalApIs = require('index'); // See note below*.
* var xxxSvc = new InsightsServiceApprovalApIs.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new InsightsServiceApprovalApIs.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new InsightsServiceApprovalApIs.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new InsightsServiceApprovalApIs.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Action model constructor.
     * @property {module:model/Action}
     */
    Action,

    /**
     * The Group model constructor.
     * @property {module:model/Group}
     */
    Group,

    /**
     * The GroupOperationParameters model constructor.
     * @property {module:model/GroupOperationParameters}
     */
    GroupOperationParameters,

    /**
     * The Request model constructor.
     * @property {module:model/Request}
     */
    Request,

    /**
     * The Stage model constructor.
     * @property {module:model/Stage}
     */
    Stage,

    /**
     * The Template model constructor.
     * @property {module:model/Template}
     */
    Template,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
     * The Workflow model constructor.
     * @property {module:model/Workflow}
     */
    Workflow,

    /**
     * The WorkflowParameters model constructor.
     * @property {module:model/WorkflowParameters}
     */
    WorkflowParameters,

    /**
    * The AdminsApi service constructor.
    * @property {module:api/AdminsApi}
    */
    AdminsApi,

    /**
    * The RequestersApi service constructor.
    * @property {module:api/RequestersApi}
    */
    RequestersApi,

    /**
    * The UsersApi service constructor.
    * @property {module:api/UsersApi}
    */
    UsersApi
};
