# InsightsServiceApprovalApIs.UsersApi

All URIs are relative to *http://localhost:3000/r/insights/platform/approval*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addRequest**](UsersApi.md#addRequest) | **POST** /workflows/{workflow_id}/requests | Add an approval request by given parameters
[**fetchRequestById**](UsersApi.md#fetchRequestById) | **GET** /requests/{id} | Return an approval request by given id
[**fetchRequestStages**](UsersApi.md#fetchRequestStages) | **GET** /requests/{request_id}/stages | Return an array of stages by given request id


<a name="addRequest"></a>
# **addRequest**
> Request addRequest(workflowId, request)

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

let apiInstance = new InsightsServiceApprovalApIs.UsersApi();
let workflowId = 56; // Number | Id of workflow
let request = new InsightsServiceApprovalApIs.Request(); // Request | Parameters need to create a request
apiInstance.addRequest(workflowId, request).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflowId** | **Number**| Id of workflow | 
 **request** | [**Request**](Request.md)| Parameters need to create a request | 

### Return type

[**Request**](Request.md)

### Authorization

[APIKey_auth](../README.md#APIKey_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fetchRequestById"></a>
# **fetchRequestById**
> Request fetchRequestById(id)

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

[**Request**](Request.md)

### Authorization

[APIKey_auth](../README.md#APIKey_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="fetchRequestStages"></a>
# **fetchRequestStages**
> [Stage] fetchRequestStages(requestId)

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

[**[Stage]**](Stage.md)

### Authorization

[APIKey_auth](../README.md#APIKey_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

