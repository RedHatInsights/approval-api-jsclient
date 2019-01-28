# InsightsServiceApprovalApIs.AdminsApi

All URIs are relative to *http://localhost:3000/r/insights/platform/approval*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAction**](AdminsApi.md#addAction) | **POST** /stages/{stage_id}/actions | Add an action to a given stage
[**addGroup**](AdminsApi.md#addGroup) | **POST** /groups | Add a new approver group by given parameters
[**addWorkflow**](AdminsApi.md#addWorkflow) | **POST** /templates/{template_id}/workflows | Add a workflow by given template id
[**fetchActionById**](AdminsApi.md#fetchActionById) | **GET** /actions/{id} | Return an approver action by id
[**fetchActions**](AdminsApi.md#fetchActions) | **GET** /actions | Return a list of approver actions
[**fetchGroupById**](AdminsApi.md#fetchGroupById) | **GET** /groups/{id} | Return approver group by given id
[**fetchGroups**](AdminsApi.md#fetchGroups) | **GET** /groups | Return all approver groups
[**fetchRequests**](AdminsApi.md#fetchRequests) | **GET** /requests | Return an array of approval requests
[**fetchStageById**](AdminsApi.md#fetchStageById) | **GET** /stages/{id} | Return an approval stage by given id
[**fetchStages**](AdminsApi.md#fetchStages) | **GET** /stages | Return all approval stages
[**fetchTemplateById**](AdminsApi.md#fetchTemplateById) | **GET** /templates/{id} | Return a template by given id
[**fetchTemplateWorkflows**](AdminsApi.md#fetchTemplateWorkflows) | **GET** /templates/{template_id}/workflows | Return an array of workflows by given template id
[**fetchTemplates**](AdminsApi.md#fetchTemplates) | **GET** /templates | Return all templates
[**fetchWorkflowById**](AdminsApi.md#fetchWorkflowById) | **GET** /workflows/{id} | Return an approval workflow by given id
[**fetchWorkflowRequests**](AdminsApi.md#fetchWorkflowRequests) | **GET** /workflows/{workflow_id}/requests | Return approval requests by given workflow id
[**fetchWorkflows**](AdminsApi.md#fetchWorkflows) | **GET** /workflows | Return all approval workflows
[**removeGroup**](AdminsApi.md#removeGroup) | **DELETE** /groups/{id} | Delete approver group by given id
[**removeWorkflow**](AdminsApi.md#removeWorkflow) | **DELETE** /workflows/{id} | Delete approval workflow by given id
[**updateGroup**](AdminsApi.md#updateGroup) | **PATCH** /groups/{id} | Update an approver group by given id
[**updateWorkflow**](AdminsApi.md#updateWorkflow) | **PATCH** /workflows/{id} | Update an approval workflow by given id


<a name="addAction"></a>
# **addAction**
> Action addAction(stageId, action)

Add an action to a given stage

Add an action to a given stage

### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';
let defaultClient = InsightsServiceApprovalApIs.ApiClient.instance;

// Configure API key authorization: APIKey_auth
let APIKey_auth = defaultClient.authentications['APIKey_auth'];
APIKey_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey_auth.apiKeyPrefix = 'Token';

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();
let stageId = 56; // Number | Id of stage
let action = new InsightsServiceApprovalApIs.Action(); // Action | Action object that will be added
apiInstance.addAction(stageId, action).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stageId** | **Number**| Id of stage | 
 **action** | [**Action**](Action.md)| Action object that will be added | 

### Return type

[**Action**](Action.md)

### Authorization

[APIKey_auth](../README.md#APIKey_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addGroup"></a>
# **addGroup**
> Group addGroup(group)

Add a new approver group by given parameters

Add a new approver group by given parameters

### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';
let defaultClient = InsightsServiceApprovalApIs.ApiClient.instance;

// Configure API key authorization: APIKey_auth
let APIKey_auth = defaultClient.authentications['APIKey_auth'];
APIKey_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey_auth.apiKeyPrefix = 'Token';

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();
let group = new InsightsServiceApprovalApIs.Group(); // Group | Parameters need to create approver group
apiInstance.addGroup(group).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | [**Group**](Group.md)| Parameters need to create approver group | 

### Return type

[**Group**](Group.md)

### Authorization

[APIKey_auth](../README.md#APIKey_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addWorkflow"></a>
# **addWorkflow**
> Workflow addWorkflow(templateId, workflowParameters)

Add a workflow by given template id

Add a workflow by given template id

### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';
let defaultClient = InsightsServiceApprovalApIs.ApiClient.instance;

// Configure API key authorization: APIKey_auth
let APIKey_auth = defaultClient.authentications['APIKey_auth'];
APIKey_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey_auth.apiKeyPrefix = 'Token';

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();
let templateId = 56; // Number | Id of template
let workflowParameters = new InsightsServiceApprovalApIs.WorkflowParameters(); // WorkflowParameters | Parameters need to create workflow
apiInstance.addWorkflow(templateId, workflowParameters).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | **Number**| Id of template | 
 **workflowParameters** | [**WorkflowParameters**](WorkflowParameters.md)| Parameters need to create workflow | 

### Return type

[**Workflow**](Workflow.md)

### Authorization

[APIKey_auth](../README.md#APIKey_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fetchActionById"></a>
# **fetchActionById**
> Action fetchActionById(id)

Return an approver action by id

Return an approver action by id

### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';
let defaultClient = InsightsServiceApprovalApIs.ApiClient.instance;

// Configure API key authorization: APIKey_auth
let APIKey_auth = defaultClient.authentications['APIKey_auth'];
APIKey_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey_auth.apiKeyPrefix = 'Token';

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();
let id = 56; // Number | Query by id
apiInstance.fetchActionById(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Query by id | 

### Return type

[**Action**](Action.md)

### Authorization

[APIKey_auth](../README.md#APIKey_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="fetchActions"></a>
# **fetchActions**
> [Action] fetchActions(opts)

Return a list of approver actions

Return a list of approver actions

### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';
let defaultClient = InsightsServiceApprovalApIs.ApiClient.instance;

// Configure API key authorization: APIKey_auth
let APIKey_auth = defaultClient.authentications['APIKey_auth'];
APIKey_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey_auth.apiKeyPrefix = 'Token';

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();
let opts = {
  'limit': 20, // Number | How many items to return at one time (max 1000)
  'offset': 0 // Number | Starting Offset
};
apiInstance.fetchActions(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| How many items to return at one time (max 1000) | [optional] [default to 20]
 **offset** | **Number**| Starting Offset | [optional] [default to 0]

### Return type

[**[Action]**](Action.md)

### Authorization

[APIKey_auth](../README.md#APIKey_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="fetchGroupById"></a>
# **fetchGroupById**
> Group fetchGroupById(id)

Return approver group by given id

Return approver group by given id

### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';
let defaultClient = InsightsServiceApprovalApIs.ApiClient.instance;

// Configure API key authorization: APIKey_auth
let APIKey_auth = defaultClient.authentications['APIKey_auth'];
APIKey_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey_auth.apiKeyPrefix = 'Token';

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();
let id = 56; // Number | Query by id
apiInstance.fetchGroupById(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Query by id | 

### Return type

[**Group**](Group.md)

### Authorization

[APIKey_auth](../README.md#APIKey_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="fetchGroups"></a>
# **fetchGroups**
> [Group] fetchGroups(opts)

Return all approver groups

Return all approver groups

### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';
let defaultClient = InsightsServiceApprovalApIs.ApiClient.instance;

// Configure API key authorization: APIKey_auth
let APIKey_auth = defaultClient.authentications['APIKey_auth'];
APIKey_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey_auth.apiKeyPrefix = 'Token';

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();
let opts = {
  'limit': 20, // Number | How many items to return at one time (max 1000)
  'offset': 0 // Number | Starting Offset
};
apiInstance.fetchGroups(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| How many items to return at one time (max 1000) | [optional] [default to 20]
 **offset** | **Number**| Starting Offset | [optional] [default to 0]

### Return type

[**[Group]**](Group.md)

### Authorization

[APIKey_auth](../README.md#APIKey_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="fetchRequests"></a>
# **fetchRequests**
> [Request] fetchRequests(opts)

Return an array of approval requests

Return an array of requests

### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';
let defaultClient = InsightsServiceApprovalApIs.ApiClient.instance;

// Configure API key authorization: APIKey_auth
let APIKey_auth = defaultClient.authentications['APIKey_auth'];
APIKey_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey_auth.apiKeyPrefix = 'Token';

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();
let opts = {
  'decision': ["null"], // [String] | Fetch item by given decision (undecided, approved, denied)
  'state': ["null"], // [String] | Fetch item by given state (pending, skipped, notified, finished)
  'requester': "requester_example", // String | Fetch item by given requester
  'limit': 20, // Number | How many items to return at one time (max 1000)
  'offset': 0 // Number | Starting Offset
};
apiInstance.fetchRequests(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **decision** | [**[String]**](String.md)| Fetch item by given decision (undecided, approved, denied) | [optional] 
 **state** | [**[String]**](String.md)| Fetch item by given state (pending, skipped, notified, finished) | [optional] 
 **requester** | **String**| Fetch item by given requester | [optional] 
 **limit** | **Number**| How many items to return at one time (max 1000) | [optional] [default to 20]
 **offset** | **Number**| Starting Offset | [optional] [default to 0]

### Return type

[**[Request]**](Request.md)

### Authorization

[APIKey_auth](../README.md#APIKey_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="fetchStageById"></a>
# **fetchStageById**
> Stage fetchStageById(id)

Return an approval stage by given id

Return an approval stage by given id

### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';
let defaultClient = InsightsServiceApprovalApIs.ApiClient.instance;

// Configure API key authorization: APIKey_auth
let APIKey_auth = defaultClient.authentications['APIKey_auth'];
APIKey_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey_auth.apiKeyPrefix = 'Token';

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();
let id = 56; // Number | Query by id
apiInstance.fetchStageById(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Query by id | 

### Return type

[**Stage**](Stage.md)

### Authorization

[APIKey_auth](../README.md#APIKey_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="fetchStages"></a>
# **fetchStages**
> [Stage] fetchStages(opts)

Return all approval stages

Return all approval stages

### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';
let defaultClient = InsightsServiceApprovalApIs.ApiClient.instance;

// Configure API key authorization: APIKey_auth
let APIKey_auth = defaultClient.authentications['APIKey_auth'];
APIKey_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey_auth.apiKeyPrefix = 'Token';

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();
let opts = {
  'limit': 20, // Number | How many items to return at one time (max 1000)
  'offset': 0 // Number | Starting Offset
};
apiInstance.fetchStages(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| How many items to return at one time (max 1000) | [optional] [default to 20]
 **offset** | **Number**| Starting Offset | [optional] [default to 0]

### Return type

[**[Stage]**](Stage.md)

### Authorization

[APIKey_auth](../README.md#APIKey_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="fetchTemplateById"></a>
# **fetchTemplateById**
> Template fetchTemplateById(id)

Return a template by given id

Return a template by given id

### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';
let defaultClient = InsightsServiceApprovalApIs.ApiClient.instance;

// Configure API key authorization: APIKey_auth
let APIKey_auth = defaultClient.authentications['APIKey_auth'];
APIKey_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey_auth.apiKeyPrefix = 'Token';

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();
let id = 56; // Number | Query by id
apiInstance.fetchTemplateById(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Query by id | 

### Return type

[**Template**](Template.md)

### Authorization

[APIKey_auth](../README.md#APIKey_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="fetchTemplateWorkflows"></a>
# **fetchTemplateWorkflows**
> [Workflow] fetchTemplateWorkflows(templateId, opts)

Return an array of workflows by given template id

Return an array of workflows by given template id

### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';
let defaultClient = InsightsServiceApprovalApIs.ApiClient.instance;

// Configure API key authorization: APIKey_auth
let APIKey_auth = defaultClient.authentications['APIKey_auth'];
APIKey_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey_auth.apiKeyPrefix = 'Token';

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();
let templateId = 56; // Number | Id of template
let opts = {
  'limit': 20, // Number | How many items to return at one time (max 1000)
  'offset': 0 // Number | Starting Offset
};
apiInstance.fetchTemplateWorkflows(templateId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | **Number**| Id of template | 
 **limit** | **Number**| How many items to return at one time (max 1000) | [optional] [default to 20]
 **offset** | **Number**| Starting Offset | [optional] [default to 0]

### Return type

[**[Workflow]**](Workflow.md)

### Authorization

[APIKey_auth](../README.md#APIKey_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="fetchTemplates"></a>
# **fetchTemplates**
> [Template] fetchTemplates(opts)

Return all templates

Return all templates

### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';
let defaultClient = InsightsServiceApprovalApIs.ApiClient.instance;

// Configure API key authorization: APIKey_auth
let APIKey_auth = defaultClient.authentications['APIKey_auth'];
APIKey_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey_auth.apiKeyPrefix = 'Token';

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();
let opts = {
  'limit': 20, // Number | How many items to return at one time (max 1000)
  'offset': 0 // Number | Starting Offset
};
apiInstance.fetchTemplates(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| How many items to return at one time (max 1000) | [optional] [default to 20]
 **offset** | **Number**| Starting Offset | [optional] [default to 0]

### Return type

[**[Template]**](Template.md)

### Authorization

[APIKey_auth](../README.md#APIKey_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="fetchWorkflowById"></a>
# **fetchWorkflowById**
> Workflow fetchWorkflowById(id)

Return an approval workflow by given id

Return an approval workflow by given id

### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';
let defaultClient = InsightsServiceApprovalApIs.ApiClient.instance;

// Configure API key authorization: APIKey_auth
let APIKey_auth = defaultClient.authentications['APIKey_auth'];
APIKey_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey_auth.apiKeyPrefix = 'Token';

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();
let id = 56; // Number | Query by id
apiInstance.fetchWorkflowById(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Query by id | 

### Return type

[**Workflow**](Workflow.md)

### Authorization

[APIKey_auth](../README.md#APIKey_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="fetchWorkflowRequests"></a>
# **fetchWorkflowRequests**
> [Request] fetchWorkflowRequests(workflowId, opts)

Return approval requests by given workflow id

Return approval requests by given workflow id

### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';
let defaultClient = InsightsServiceApprovalApIs.ApiClient.instance;

// Configure API key authorization: APIKey_auth
let APIKey_auth = defaultClient.authentications['APIKey_auth'];
APIKey_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey_auth.apiKeyPrefix = 'Token';

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();
let workflowId = 56; // Number | Id of workflow
let opts = {
  'limit': 20, // Number | How many items to return at one time (max 1000)
  'offset': 0 // Number | Starting Offset
};
apiInstance.fetchWorkflowRequests(workflowId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflowId** | **Number**| Id of workflow | 
 **limit** | **Number**| How many items to return at one time (max 1000) | [optional] [default to 20]
 **offset** | **Number**| Starting Offset | [optional] [default to 0]

### Return type

[**[Request]**](Request.md)

### Authorization

[APIKey_auth](../README.md#APIKey_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="fetchWorkflows"></a>
# **fetchWorkflows**
> [Workflow] fetchWorkflows(opts)

Return all approval workflows

Return all approval workflows

### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';
let defaultClient = InsightsServiceApprovalApIs.ApiClient.instance;

// Configure API key authorization: APIKey_auth
let APIKey_auth = defaultClient.authentications['APIKey_auth'];
APIKey_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey_auth.apiKeyPrefix = 'Token';

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();
let opts = {
  'limit': 20, // Number | How many items to return at one time (max 1000)
  'offset': 0 // Number | Starting Offset
};
apiInstance.fetchWorkflows(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| How many items to return at one time (max 1000) | [optional] [default to 20]
 **offset** | **Number**| Starting Offset | [optional] [default to 0]

### Return type

[**[Workflow]**](Workflow.md)

### Authorization

[APIKey_auth](../README.md#APIKey_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="removeGroup"></a>
# **removeGroup**
> removeGroup(id)

Delete approver group by given id

Delete group by given id

### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';
let defaultClient = InsightsServiceApprovalApIs.ApiClient.instance;

// Configure API key authorization: APIKey_auth
let APIKey_auth = defaultClient.authentications['APIKey_auth'];
APIKey_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey_auth.apiKeyPrefix = 'Token';

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();
let id = 56; // Number | Query by id
apiInstance.removeGroup(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Query by id | 

### Return type

null (empty response body)

### Authorization

[APIKey_auth](../README.md#APIKey_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="removeWorkflow"></a>
# **removeWorkflow**
> removeWorkflow(id)

Delete approval workflow by given id

Delete approval workflow by given id

### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';
let defaultClient = InsightsServiceApprovalApIs.ApiClient.instance;

// Configure API key authorization: APIKey_auth
let APIKey_auth = defaultClient.authentications['APIKey_auth'];
APIKey_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey_auth.apiKeyPrefix = 'Token';

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();
let id = 56; // Number | Query by id
apiInstance.removeWorkflow(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Query by id | 

### Return type

null (empty response body)

### Authorization

[APIKey_auth](../README.md#APIKey_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="updateGroup"></a>
# **updateGroup**
> updateGroup(id, group)

Update an approver group by given id

Update an approver group by given id

### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';
let defaultClient = InsightsServiceApprovalApIs.ApiClient.instance;

// Configure API key authorization: APIKey_auth
let APIKey_auth = defaultClient.authentications['APIKey_auth'];
APIKey_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey_auth.apiKeyPrefix = 'Token';

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();
let id = 56; // Number | Query by id
let group = new InsightsServiceApprovalApIs.Group(); // Group | Approver group object that needs to be updated
apiInstance.updateGroup(id, group).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Query by id | 
 **group** | [**Group**](Group.md)| Approver group object that needs to be updated | 

### Return type

null (empty response body)

### Authorization

[APIKey_auth](../README.md#APIKey_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="updateWorkflow"></a>
# **updateWorkflow**
> updateWorkflow(id, workflow)

Update an approval workflow by given id

Update an approval workflow by given id

### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';
let defaultClient = InsightsServiceApprovalApIs.ApiClient.instance;

// Configure API key authorization: APIKey_auth
let APIKey_auth = defaultClient.authentications['APIKey_auth'];
APIKey_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey_auth.apiKeyPrefix = 'Token';

let apiInstance = new InsightsServiceApprovalApIs.AdminsApi();
let id = 56; // Number | Query by id
let workflow = new InsightsServiceApprovalApIs.Workflow(); // Workflow | Parameters need to update approval workflow
apiInstance.updateWorkflow(id, workflow).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Query by id | 
 **workflow** | [**Workflow**](Workflow.md)| Parameters need to update approval workflow | 

### Return type

null (empty response body)

### Authorization

[APIKey_auth](../README.md#APIKey_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

