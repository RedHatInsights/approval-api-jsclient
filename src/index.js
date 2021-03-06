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
import ActionIn from './model/ActionIn';
import ActionOut from './model/ActionOut';
import GroupIn from './model/GroupIn';
import GroupOperationIn from './model/GroupOperationIn';
import GroupOut from './model/GroupOut';
import RequestIn from './model/RequestIn';
import RequestOut from './model/RequestOut';
import StageOut from './model/StageOut';
import TemplateOut from './model/TemplateOut';
import UserIn from './model/UserIn';
import UserOut from './model/UserOut';
import Workflow from './model/Workflow';
import WorkflowIn from './model/WorkflowIn';
import WorkflowOut from './model/WorkflowOut';
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
     * The ActionIn model constructor.
     * @property {module:model/ActionIn}
     */
    ActionIn,

    /**
     * The ActionOut model constructor.
     * @property {module:model/ActionOut}
     */
    ActionOut,

    /**
     * The GroupIn model constructor.
     * @property {module:model/GroupIn}
     */
    GroupIn,

    /**
     * The GroupOperationIn model constructor.
     * @property {module:model/GroupOperationIn}
     */
    GroupOperationIn,

    /**
     * The GroupOut model constructor.
     * @property {module:model/GroupOut}
     */
    GroupOut,

    /**
     * The RequestIn model constructor.
     * @property {module:model/RequestIn}
     */
    RequestIn,

    /**
     * The RequestOut model constructor.
     * @property {module:model/RequestOut}
     */
    RequestOut,

    /**
     * The StageOut model constructor.
     * @property {module:model/StageOut}
     */
    StageOut,

    /**
     * The TemplateOut model constructor.
     * @property {module:model/TemplateOut}
     */
    TemplateOut,

    /**
     * The UserIn model constructor.
     * @property {module:model/UserIn}
     */
    UserIn,

    /**
     * The UserOut model constructor.
     * @property {module:model/UserOut}
     */
    UserOut,

    /**
     * The Workflow model constructor.
     * @property {module:model/Workflow}
     */
    Workflow,

    /**
     * The WorkflowIn model constructor.
     * @property {module:model/WorkflowIn}
     */
    WorkflowIn,

    /**
     * The WorkflowOut model constructor.
     * @property {module:model/WorkflowOut}
     */
    WorkflowOut,

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
