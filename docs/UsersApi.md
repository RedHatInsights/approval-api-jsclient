# InsightsServiceApprovalApIs.UsersApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAction**](UsersApi.md#addAction) | **POST** /stages/{stage_id}/actions | Add an action to a given stage
[**fetchActionById**](UsersApi.md#fetchActionById) | **GET** /actions/{id} | Return an user action by id
[**fetchActionsByStageId**](UsersApi.md#fetchActionsByStageId) | **GET** /stages/{stage_id}/actions | Return actions in a given stage
[**fetchRequestById**](UsersApi.md#fetchRequestById) | **GET** /requests/{id} | Return an approval request by given id
[**fetchRequestStages**](UsersApi.md#fetchRequestStages) | **GET** /requests/{request_id}/stages | Return an array of stages by given request id
[**fetchRequests**](UsersApi.md#fetchRequests) | **GET** /requests | Return an array of approval requests


<a name="addAction"></a>
# **addAction**
> ActionOut addAction(stageId, actionIn)

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

let apiInstance = new InsightsServiceApprovalApIs.UsersApi();
let stageId = 56; // Number | Id of stage
let actionIn = new InsightsServiceApprovalApIs.ActionIn(); // ActionIn | Action object that will be added
apiInstance.addAction(stageId, actionIn).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stageId** | **Number**| Id of stage | 
 **actionIn** | [**ActionIn**](ActionIn.md)| Action object that will be added | 

### Return type

[**ActionOut**](ActionOut.md)

### Authorization

[APIKey_auth](../README.md#APIKey_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fetchActionById"></a>
# **fetchActionById**
> ActionOut fetchActionById(id)

Return an user action by id

Return an user action by id

### Example
```javascript
import InsightsServiceApprovalApIs from 'insights_service_approval_ap_is';
let defaultClient = InsightsServiceApprovalApIs.ApiClient.instance;

// Configure API key authorization: APIKey_auth
let APIKey_auth = defaultClient.authentications['APIKey_auth'];
APIKey_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey_auth.apiKeyPrefix = 'Token';

let apiInstance = new InsightsServiceApprovalApIs.UsersApi();
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

[**ActionOut**](ActionOut.md)

### Authorization

[APIKey_auth](../README.md#APIKey_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

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

let apiInstance = new InsightsServiceApprovalApIs.UsersApi();
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

let apiInstance = new InsightsServiceApprovalApIs.UsersApi();
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

let apiInstance = new InsightsServiceApprovalApIs.UsersApi();
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

let apiInstance = new InsightsServiceApprovalApIs.UsersApi();
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

