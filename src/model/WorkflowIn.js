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

import ApiClient from '../ApiClient';
import Workflow from './Workflow';

/**
 * The WorkflowIn model module.
 * @module model/WorkflowIn
 * @version 1.0.0
 */
class WorkflowIn {
    /**
     * Constructs a new <code>WorkflowIn</code>.
     * Parameters to create a workflow
     * @alias module:model/WorkflowIn
     * @extends module:model/Workflow
     * @implements module:model/Workflow
     * @param name {} 
     */
    constructor(name) { 
        Workflow.initialize(this, name);
        WorkflowIn.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
    }

    /**
     * Constructs a <code>WorkflowIn</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowIn} obj Optional instance to populate.
     * @return {module:model/WorkflowIn} The populated <code>WorkflowIn</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkflowIn();
            Workflow.constructFromObject(data, obj);
            Workflow.constructFromObject(data, obj);

        }
        return obj;
    }


}


// Implement Workflow interface:
/**
 * @member {String} name
 */
Workflow.prototype['name'] = undefined;




export default WorkflowIn;
