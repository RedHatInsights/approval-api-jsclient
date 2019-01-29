# InsightsServiceApprovalApIs.Action

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**processedBy** | **String** | Processor info who perform the action | 
**operation** | **String** | Types of action, may be one of the value (approve, deny, notify, memo, or skip). The stage will be updated according to the operation. | [optional] [default to &#39;memo&#39;]
**stageId** | **String** | Associated stage id | [optional] 
**comments** | **String** | Comments for action | [optional] 
**createdAt** | **Date** | Timestamp of creation | [optional] 


<a name="OperationEnum"></a>
## Enum: OperationEnum


* `approve` (value: `"approve"`)

* `deny` (value: `"deny"`)

* `notify` (value: `"notify"`)

* `memo` (value: `"memo"`)

* `skip` (value: `"skip"`)




