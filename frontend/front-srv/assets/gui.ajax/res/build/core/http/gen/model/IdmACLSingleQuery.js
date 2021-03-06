/**
 * Pydio Cells Rest API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _IdmACLAction = require('./IdmACLAction');

var _IdmACLAction2 = _interopRequireDefault(_IdmACLAction);

/**
* The IdmACLSingleQuery model module.
* @module model/IdmACLSingleQuery
* @version 1.0
*/

var IdmACLSingleQuery = (function () {
    /**
    * Constructs a new <code>IdmACLSingleQuery</code>.
    * @alias module:model/IdmACLSingleQuery
    * @class
    */

    function IdmACLSingleQuery() {
        _classCallCheck(this, IdmACLSingleQuery);

        this.Actions = undefined;
        this.RoleIDs = undefined;
        this.WorkspaceIDs = undefined;
        this.NodeIDs = undefined;
        this.not = undefined;
    }

    /**
    * Constructs a <code>IdmACLSingleQuery</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/IdmACLSingleQuery} obj Optional instance to populate.
    * @return {module:model/IdmACLSingleQuery} The populated <code>IdmACLSingleQuery</code> instance.
    */

    IdmACLSingleQuery.constructFromObject = function constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IdmACLSingleQuery();

            if (data.hasOwnProperty('Actions')) {
                obj['Actions'] = _ApiClient2['default'].convertToType(data['Actions'], [_IdmACLAction2['default']]);
            }
            if (data.hasOwnProperty('RoleIDs')) {
                obj['RoleIDs'] = _ApiClient2['default'].convertToType(data['RoleIDs'], ['String']);
            }
            if (data.hasOwnProperty('WorkspaceIDs')) {
                obj['WorkspaceIDs'] = _ApiClient2['default'].convertToType(data['WorkspaceIDs'], ['String']);
            }
            if (data.hasOwnProperty('NodeIDs')) {
                obj['NodeIDs'] = _ApiClient2['default'].convertToType(data['NodeIDs'], ['String']);
            }
            if (data.hasOwnProperty('not')) {
                obj['not'] = _ApiClient2['default'].convertToType(data['not'], 'Boolean');
            }
        }
        return obj;
    };

    /**
    * @member {Array.<module:model/IdmACLAction>} Actions
    */
    return IdmACLSingleQuery;
})();

exports['default'] = IdmACLSingleQuery;
module.exports = exports['default'];

/**
* @member {Array.<String>} RoleIDs
*/

/**
* @member {Array.<String>} WorkspaceIDs
*/

/**
* @member {Array.<String>} NodeIDs
*/

/**
* @member {Boolean} not
*/
