# InsightsServiceApprovalApIs.RequestersApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addRequest**](RequestersApi.md#addRequest) | **POST** /workflows/{workflow_id}/requests | Add an approval request by given parameters
[**fetchActionsByStageId**](RequestersApi.md#fetchActionsByStageId) | **GET** /stages/{stage_id}/actions | Return actions in a given stage
[**fetchRequestById**](RequestersApi.md#fetchRequestById) | **GET** /requests/{id} | Return an approval request by given id
[**fetchRequestStages**](RequestersApi.md#fetchRequestStages) | **GET** /requests/{request_id}/stages | Return an array of stages by given request id
[**fetchRequests**](RequestersApi.md#fetchRequests) | **GET** /requests | Return an array of approval requests
[**fetchStageById**](RequestersApi.md#fetchStageById) | **GET** /stages/{id} | Return an approval stage by given id


<a name="addRequest"></a>
# **addRequest**
> RequestOut addRequest(workflowId, requestIn)

Add an approval request by given parameters

Add an approval request by given parameters

### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';
let defaultClient = InsightsServiceApprovalApIs.ApiClient.instance;

// Configure API key authorization: APIKey_auth
let APIKey_auth = defaultClient.authentications['APIKey_auth'];
APIKey_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey_auth.apiKeyPrefix = 'Token';

let apiInstance = new InsightsServiceApprovalApIs.RequestersApi();
let workflowId = 56; // Number | Id of workflow
let requestIn = new InsightsServiceApprovalApIs.RequestIn(); // RequestIn | Parameters need to create a request
apiInstance.addRequest(workflowId, requestIn).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflowId** | **Number**| Id of workflow | 
 **requestIn** | [**RequestIn**](RequestIn.md)| Parameters need to create a request | 

### Return type

[**RequestOut**](RequestOut.md)

### Authorization

[APIKey_auth](../README.md#APIKey_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fetchActionsByStageId"></a>
# **fetchActionsByStageId**
> [ActionOut] fetchActionsByStageId(stageId)

Return actions in a given stage

List all actions of a stage

### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';
let defaultClient = InsightsServiceApprovalApIs.ApiClient.instance;

// Configure API key authorization: APIKey_auth
let APIKey_auth = defaultClient.authentications['APIKey_auth'];
APIKey_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey_auth.apiKeyPrefix = 'Token';

let apiInstance = new InsightsServiceApprovalApIs.RequestersApi();
let stageId = 56; // Number | Id of stage
apiInstance.fetchActionsByStageId(stageId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stageId** | **Number**| Id of stage | 

### Return type

[**[ActionOut]**](ActionOut.md)

### Authorization

[APIKey_auth](../README.md#APIKey_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="fetchRequestById"></a>
# **fetchRequestById**
> RequestOut fetchRequestById(id)

Return an approval request by given id

Return an approval request by given id

### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';
let defaultClient = InsightsServiceApprovalApIs.ApiClient.instance;

// Configure API key authorization: APIKey_auth
let APIKey_auth = defaultClient.authentications['APIKey_auth'];
APIKey_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey_auth.apiKeyPrefix = 'Token';

let apiInstance = new InsightsServiceApprovalApIs.RequestersApi();
let id = 56; // Number | Query by id
apiInstance.fetchRequestById(id).then((data) => {
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

[**RequestOut**](RequestOut.md)

### Authorization

[APIKey_auth](../README.md#APIKey_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="fetchRequestStages"></a>
# **fetchRequestStages**
> [StageOut] fetchRequestStages(requestId)

Return an array of stages by given request id

Return an array of stages by given request id

### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';
let defaultClient = InsightsServiceApprovalApIs.ApiClient.instance;

// Configure API key authorization: APIKey_auth
let APIKey_auth = defaultClient.authentications['APIKey_auth'];
APIKey_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey_auth.apiKeyPrefix = 'Token';

let apiInstance = new InsightsServiceApprovalApIs.RequestersApi();
let requestId = 56; // Number | Id of request
apiInstance.fetchRequestStages(requestId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestId** | **Number**| Id of request | 

### Return type

[**[StageOut]**](StageOut.md)

### Authorization

[APIKey_auth](../README.md#APIKey_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="fetchRequests"></a>
# **fetchRequests**
> [RequestOut] fetchRequests(opts)

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

let apiInstance = new InsightsServiceApprovalApIs.RequestersApi();
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

[**[RequestOut]**](RequestOut.md)

### Authorization

[APIKey_auth](../README.md#APIKey_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="fetchStageById"></a>
# **fetchStageById**
> StageOut fetchStageById(id)

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

let apiInstance = new InsightsServiceApprovalApIs.RequestersApi();
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

[**StageOut**](StageOut.md)

### Authorization

[APIKey_auth](../README.md#APIKey_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

