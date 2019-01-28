# InsightsServiceApprovalApIs.ApproversApi

All URIs are relative to *http://localhost:3000/r/insights/platform/approval*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAction**](ApproversApi.md#addAction) | **POST** /stages/{stage_id}/actions | Add an action to a given stage
[**fetchActionById**](ApproversApi.md#fetchActionById) | **GET** /actions/{id} | Return an approver action by id
[**fetchActions**](ApproversApi.md#fetchActions) | **GET** /actions | Return a list of approver actions
[**fetchStageById**](ApproversApi.md#fetchStageById) | **GET** /stages/{id} | Return an approval stage by given id


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

let apiInstance = new InsightsServiceApprovalApIs.ApproversApi();
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

let apiInstance = new InsightsServiceApprovalApIs.ApproversApi();
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

let apiInstance = new InsightsServiceApprovalApIs.ApproversApi();
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

let apiInstance = new InsightsServiceApprovalApIs.ApproversApi();
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

