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


import ApiClient from "../ApiClient";
import CtlService from '../model/CtlService';
import EncryptionAdminCreateKeyRequest from '../model/EncryptionAdminCreateKeyRequest';
import EncryptionAdminCreateKeyResponse from '../model/EncryptionAdminCreateKeyResponse';
import EncryptionAdminDeleteKeyRequest from '../model/EncryptionAdminDeleteKeyRequest';
import EncryptionAdminDeleteKeyResponse from '../model/EncryptionAdminDeleteKeyResponse';
import EncryptionAdminExportKeyRequest from '../model/EncryptionAdminExportKeyRequest';
import EncryptionAdminExportKeyResponse from '../model/EncryptionAdminExportKeyResponse';
import EncryptionAdminImportKeyRequest from '../model/EncryptionAdminImportKeyRequest';
import EncryptionAdminImportKeyResponse from '../model/EncryptionAdminImportKeyResponse';
import EncryptionAdminListKeysRequest from '../model/EncryptionAdminListKeysRequest';
import EncryptionAdminListKeysResponse from '../model/EncryptionAdminListKeysResponse';
import ObjectDataSource from '../model/ObjectDataSource';
import RestConfiguration from '../model/RestConfiguration';
import RestControlServiceRequest from '../model/RestControlServiceRequest';
import RestDataSourceCollection from '../model/RestDataSourceCollection';
import RestDeleteDataSourceResponse from '../model/RestDeleteDataSourceResponse';
import RestDiscoveryResponse from '../model/RestDiscoveryResponse';
import RestListPeerFoldersRequest from '../model/RestListPeerFoldersRequest';
import RestListPeersAddressesResponse from '../model/RestListPeersAddressesResponse';
import RestNodesCollection from '../model/RestNodesCollection';
import RestOpenApiResponse from '../model/RestOpenApiResponse';
import RestServiceCollection from '../model/RestServiceCollection';
import RestVersioningPolicyCollection from '../model/RestVersioningPolicyCollection';
import TreeVersioningPolicy from '../model/TreeVersioningPolicy';

/**
* ConfigService service.
* @module api/ConfigServiceApi
* @version 1.0
*/
export default class ConfigServiceApi {

    /**
    * Constructs a new ConfigServiceApi. 
    * @alias module:api/ConfigServiceApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Publish Forms definition for building screens in frontend
     * @param {String} serviceName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestDiscoveryResponse} and HTTP response
     */
    configFormsDiscoveryWithHttpInfo(serviceName) {
      let postBody = null;

      // verify the required parameter 'serviceName' is set
      if (serviceName === undefined || serviceName === null) {
        throw new Error("Missing the required parameter 'serviceName' when calling configFormsDiscovery");
      }


      let pathParams = {
        'ServiceName': serviceName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = RestDiscoveryResponse;

      return this.apiClient.callApi(
        '/config/discovery/forms/{ServiceName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Publish Forms definition for building screens in frontend
     * @param {String} serviceName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestDiscoveryResponse}
     */
    configFormsDiscovery(serviceName) {
      return this.configFormsDiscoveryWithHttpInfo(serviceName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * [Not Implemented]  Start/Stop a service
     * @param {module:model/RestControlServiceRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CtlService} and HTTP response
     */
    controlServiceWithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling controlService");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CtlService;

      return this.apiClient.callApi(
        '/config/ctl', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * [Not Implemented]  Start/Stop a service
     * @param {module:model/RestControlServiceRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CtlService}
     */
    controlService(body) {
      return this.controlServiceWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a new master key
     * @param {module:model/EncryptionAdminCreateKeyRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EncryptionAdminCreateKeyResponse} and HTTP response
     */
    createEncryptionKeyWithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createEncryptionKey");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = EncryptionAdminCreateKeyResponse;

      return this.apiClient.callApi(
        '/config/encryption/create', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a new master key
     * @param {module:model/EncryptionAdminCreateKeyRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EncryptionAdminCreateKeyResponse}
     */
    createEncryptionKey(body) {
      return this.createEncryptionKeyWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a datasource
     * @param {String} name 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestDeleteDataSourceResponse} and HTTP response
     */
    deleteDataSourceWithHttpInfo(name) {
      let postBody = null;

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling deleteDataSource");
      }


      let pathParams = {
        'Name': name
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = RestDeleteDataSourceResponse;

      return this.apiClient.callApi(
        '/config/datasource/{Name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a datasource
     * @param {String} name 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestDeleteDataSourceResponse}
     */
    deleteDataSource(name) {
      return this.deleteDataSourceWithHttpInfo(name)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete an existing master key
     * @param {module:model/EncryptionAdminDeleteKeyRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EncryptionAdminDeleteKeyResponse} and HTTP response
     */
    deleteEncryptionKeyWithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling deleteEncryptionKey");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = EncryptionAdminDeleteKeyResponse;

      return this.apiClient.callApi(
        '/config/encryption/delete', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete an existing master key
     * @param {module:model/EncryptionAdminDeleteKeyRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EncryptionAdminDeleteKeyResponse}
     */
    deleteEncryptionKey(body) {
      return this.deleteEncryptionKeyWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Publish available endpoints
     * @param {Object} opts Optional parameters
     * @param {String} opts.endpointType 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestDiscoveryResponse} and HTTP response
     */
    endpointsDiscoveryWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'EndpointType': opts['endpointType']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = RestDiscoveryResponse;

      return this.apiClient.callApi(
        '/config/discovery', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Publish available endpoints
     * @param {Object} opts Optional parameters
     * @param {String} opts.endpointType 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestDiscoveryResponse}
     */
    endpointsDiscovery(opts) {
      return this.endpointsDiscoveryWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Export a master key for backup purpose, protected with a password
     * @param {module:model/EncryptionAdminExportKeyRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EncryptionAdminExportKeyResponse} and HTTP response
     */
    exportEncryptionKeyWithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling exportEncryptionKey");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = EncryptionAdminExportKeyResponse;

      return this.apiClient.callApi(
        '/config/encryption/export', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Export a master key for backup purpose, protected with a password
     * @param {module:model/EncryptionAdminExportKeyRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EncryptionAdminExportKeyResponse}
     */
    exportEncryptionKey(body) {
      return this.exportEncryptionKeyWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Generic config Get using a full path in the config tree
     * @param {String} fullPath 
     * @param {Object} opts Optional parameters
     * @param {String} opts.data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestConfiguration} and HTTP response
     */
    getConfigWithHttpInfo(fullPath, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'fullPath' is set
      if (fullPath === undefined || fullPath === null) {
        throw new Error("Missing the required parameter 'fullPath' when calling getConfig");
      }


      let pathParams = {
        'FullPath': fullPath
      };
      let queryParams = {
        'Data': opts['data']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = RestConfiguration;

      return this.apiClient.callApi(
        '/config/{FullPath}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Generic config Get using a full path in the config tree
     * @param {String} fullPath 
     * @param {Object} opts Optional parameters
     * @param {String} opts.data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestConfiguration}
     */
    getConfig(fullPath, opts) {
      return this.getConfigWithHttpInfo(fullPath, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Load datasource information
     * @param {String} name 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.disabled 
     * @param {module:model/String} opts.storageType  (default to LOCAL)
     * @param {String} opts.objectsServiceName 
     * @param {String} opts.objectsHost 
     * @param {Number} opts.objectsPort 
     * @param {Boolean} opts.objectsSecure 
     * @param {String} opts.objectsBucket 
     * @param {String} opts.objectsBaseFolder 
     * @param {String} opts.apiKey 
     * @param {String} opts.apiSecret 
     * @param {String} opts.peerAddress 
     * @param {Boolean} opts.watch 
     * @param {module:model/String} opts.encryptionMode  (default to CLEAR)
     * @param {String} opts.encryptionKey 
     * @param {String} opts.versioningPolicyName 
     * @param {Number} opts.creationDate 
     * @param {Number} opts.lastSynchronizationDate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ObjectDataSource} and HTTP response
     */
    getDataSourceWithHttpInfo(name, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling getDataSource");
      }


      let pathParams = {
        'Name': name
      };
      let queryParams = {
        'Disabled': opts['disabled'],
        'StorageType': opts['storageType'],
        'ObjectsServiceName': opts['objectsServiceName'],
        'ObjectsHost': opts['objectsHost'],
        'ObjectsPort': opts['objectsPort'],
        'ObjectsSecure': opts['objectsSecure'],
        'ObjectsBucket': opts['objectsBucket'],
        'ObjectsBaseFolder': opts['objectsBaseFolder'],
        'ApiKey': opts['apiKey'],
        'ApiSecret': opts['apiSecret'],
        'PeerAddress': opts['peerAddress'],
        'Watch': opts['watch'],
        'EncryptionMode': opts['encryptionMode'],
        'EncryptionKey': opts['encryptionKey'],
        'VersioningPolicyName': opts['versioningPolicyName'],
        'CreationDate': opts['creationDate'],
        'LastSynchronizationDate': opts['lastSynchronizationDate']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ObjectDataSource;

      return this.apiClient.callApi(
        '/config/datasource/{Name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Load datasource information
     * @param {String} name 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.disabled 
     * @param {module:model/String} opts.storageType  (default to LOCAL)
     * @param {String} opts.objectsServiceName 
     * @param {String} opts.objectsHost 
     * @param {Number} opts.objectsPort 
     * @param {Boolean} opts.objectsSecure 
     * @param {String} opts.objectsBucket 
     * @param {String} opts.objectsBaseFolder 
     * @param {String} opts.apiKey 
     * @param {String} opts.apiSecret 
     * @param {String} opts.peerAddress 
     * @param {Boolean} opts.watch 
     * @param {module:model/String} opts.encryptionMode  (default to CLEAR)
     * @param {String} opts.encryptionKey 
     * @param {String} opts.versioningPolicyName 
     * @param {Number} opts.creationDate 
     * @param {Number} opts.lastSynchronizationDate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ObjectDataSource}
     */
    getDataSource(name, opts) {
      return this.getDataSourceWithHttpInfo(name, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Load a given versioning policy
     * @param {String} uuid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.name 
     * @param {String} opts.description 
     * @param {String} opts.versionsDataSourceName 
     * @param {String} opts.versionsDataSourceBucket 
     * @param {String} opts.maxTotalSize 
     * @param {String} opts.maxSizePerFile 
     * @param {String} opts.ignoreFilesGreaterThan 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TreeVersioningPolicy} and HTTP response
     */
    getVersioningPolicyWithHttpInfo(uuid, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling getVersioningPolicy");
      }


      let pathParams = {
        'Uuid': uuid
      };
      let queryParams = {
        'Name': opts['name'],
        'Description': opts['description'],
        'VersionsDataSourceName': opts['versionsDataSourceName'],
        'VersionsDataSourceBucket': opts['versionsDataSourceBucket'],
        'MaxTotalSize': opts['maxTotalSize'],
        'MaxSizePerFile': opts['maxSizePerFile'],
        'IgnoreFilesGreaterThan': opts['ignoreFilesGreaterThan']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = TreeVersioningPolicy;

      return this.apiClient.callApi(
        '/config/versioning/{Uuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Load a given versioning policy
     * @param {String} uuid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.name 
     * @param {String} opts.description 
     * @param {String} opts.versionsDataSourceName 
     * @param {String} opts.versionsDataSourceBucket 
     * @param {String} opts.maxTotalSize 
     * @param {String} opts.maxSizePerFile 
     * @param {String} opts.ignoreFilesGreaterThan 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TreeVersioningPolicy}
     */
    getVersioningPolicy(uuid, opts) {
      return this.getVersioningPolicyWithHttpInfo(uuid, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Import a previously exported master key, requires the password created at export time
     * @param {module:model/EncryptionAdminImportKeyRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EncryptionAdminImportKeyResponse} and HTTP response
     */
    importEncryptionKeyWithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling importEncryptionKey");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = EncryptionAdminImportKeyResponse;

      return this.apiClient.callApi(
        '/config/encryption/import', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Import a previously exported master key, requires the password created at export time
     * @param {module:model/EncryptionAdminImportKeyRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EncryptionAdminImportKeyResponse}
     */
    importEncryptionKey(body) {
      return this.importEncryptionKeyWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List all defined datasources
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestDataSourceCollection} and HTTP response
     */
    listDataSourcesWithHttpInfo() {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = RestDataSourceCollection;

      return this.apiClient.callApi(
        '/config/datasource', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List all defined datasources
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestDataSourceCollection}
     */
    listDataSources() {
      return this.listDataSourcesWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List registered master keys
     * @param {module:model/EncryptionAdminListKeysRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EncryptionAdminListKeysResponse} and HTTP response
     */
    listEncryptionKeysWithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling listEncryptionKeys");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = EncryptionAdminListKeysResponse;

      return this.apiClient.callApi(
        '/config/encryption/list', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List registered master keys
     * @param {module:model/EncryptionAdminListKeysRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EncryptionAdminListKeysResponse}
     */
    listEncryptionKeys(body) {
      return this.listEncryptionKeysWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List folders on a peer, starting from root
     * @param {String} peerAddress 
     * @param {module:model/RestListPeerFoldersRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestNodesCollection} and HTTP response
     */
    listPeerFoldersWithHttpInfo(peerAddress, body) {
      let postBody = body;

      // verify the required parameter 'peerAddress' is set
      if (peerAddress === undefined || peerAddress === null) {
        throw new Error("Missing the required parameter 'peerAddress' when calling listPeerFolders");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling listPeerFolders");
      }


      let pathParams = {
        'PeerAddress': peerAddress
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = RestNodesCollection;

      return this.apiClient.callApi(
        '/config/peers/{PeerAddress}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List folders on a peer, starting from root
     * @param {String} peerAddress 
     * @param {module:model/RestListPeerFoldersRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestNodesCollection}
     */
    listPeerFolders(peerAddress, body) {
      return this.listPeerFoldersWithHttpInfo(peerAddress, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List all detected peers (servers on which the app is running)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestListPeersAddressesResponse} and HTTP response
     */
    listPeersAddressesWithHttpInfo() {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = RestListPeersAddressesResponse;

      return this.apiClient.callApi(
        '/config/peers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List all detected peers (servers on which the app is running)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestListPeersAddressesResponse}
     */
    listPeersAddresses() {
      return this.listPeersAddressesWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List all services and their status
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.statusFilter  (default to ANY)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestServiceCollection} and HTTP response
     */
    listServicesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'StatusFilter': opts['statusFilter']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = RestServiceCollection;

      return this.apiClient.callApi(
        '/config/ctl', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List all services and their status
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.statusFilter  (default to ANY)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestServiceCollection}
     */
    listServices(opts) {
      return this.listServicesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List all defined versioning policies
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestVersioningPolicyCollection} and HTTP response
     */
    listVersioningPoliciesWithHttpInfo() {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = RestVersioningPolicyCollection;

      return this.apiClient.callApi(
        '/config/versioning', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List all defined versioning policies
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestVersioningPolicyCollection}
     */
    listVersioningPolicies() {
      return this.listVersioningPoliciesWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Publish available REST APIs
     * @param {Object} opts Optional parameters
     * @param {String} opts.endpointType 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestOpenApiResponse} and HTTP response
     */
    openApiDiscoveryWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'EndpointType': opts['endpointType']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = RestOpenApiResponse;

      return this.apiClient.callApi(
        '/config/discovery/openapi', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Publish available REST APIs
     * @param {Object} opts Optional parameters
     * @param {String} opts.endpointType 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestOpenApiResponse}
     */
    openApiDiscovery(opts) {
      return this.openApiDiscoveryWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Generic config Put, using a full path in the config tree
     * @param {String} fullPath 
     * @param {module:model/RestConfiguration} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestConfiguration} and HTTP response
     */
    putConfigWithHttpInfo(fullPath, body) {
      let postBody = body;

      // verify the required parameter 'fullPath' is set
      if (fullPath === undefined || fullPath === null) {
        throw new Error("Missing the required parameter 'fullPath' when calling putConfig");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putConfig");
      }


      let pathParams = {
        'FullPath': fullPath
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = RestConfiguration;

      return this.apiClient.callApi(
        '/config/{FullPath}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Generic config Put, using a full path in the config tree
     * @param {String} fullPath 
     * @param {module:model/RestConfiguration} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestConfiguration}
     */
    putConfig(fullPath, body) {
      return this.putConfigWithHttpInfo(fullPath, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create or update a datasource
     * @param {String} name 
     * @param {module:model/ObjectDataSource} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ObjectDataSource} and HTTP response
     */
    putDataSourceWithHttpInfo(name, body) {
      let postBody = body;

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling putDataSource");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putDataSource");
      }


      let pathParams = {
        'Name': name
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ObjectDataSource;

      return this.apiClient.callApi(
        '/config/datasource/{Name}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create or update a datasource
     * @param {String} name 
     * @param {module:model/ObjectDataSource} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ObjectDataSource}
     */
    putDataSource(name, body) {
      return this.putDataSourceWithHttpInfo(name, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}