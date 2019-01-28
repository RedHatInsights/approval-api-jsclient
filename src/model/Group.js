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

/**
 * The Group model module.
 * @module model/Group
 * @version 1.0.0
 */
class Group {
    /**
     * Constructs a new <code>Group</code>.
     * Approver groups. Each group may have one or many approvers. The first response from any approver will be treated as group response.
     * @alias module:model/Group
     * @param name {String} Group name
     * @param contactMethod {String} Contact type. It may be email, slack, team, etc. So far only email is supported.
     * @param contactSetting {Object} JSON object with contact Setting
     */
    constructor(name, contactMethod, contactSetting) { 
        
        Group.initialize(this, name, contactMethod, contactSetting);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, contactMethod, contactSetting) { 
        obj['name'] = name;
        obj['contact_method'] = contactMethod;
        obj['contact_setting'] = contactSetting;
    }

    /**
     * Constructs a <code>Group</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Group} obj Optional instance to populate.
     * @return {module:model/Group} The populated <code>Group</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Group();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('contact_method')) {
                obj['contact_method'] = ApiClient.convertToType(data['contact_method'], 'String');
            }
            if (data.hasOwnProperty('contact_setting')) {
                obj['contact_setting'] = ApiClient.convertToType(data['contact_setting'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
Group.prototype['id'] = undefined;

/**
 * Group name
 * @member {String} name
 */
Group.prototype['name'] = undefined;

/**
 * Contact type. It may be email, slack, team, etc. So far only email is supported.
 * @member {String} contact_method
 */
Group.prototype['contact_method'] = undefined;

/**
 * JSON object with contact Setting
 * @member {Object} contact_setting
 */
Group.prototype['contact_setting'] = undefined;






export default Group;
