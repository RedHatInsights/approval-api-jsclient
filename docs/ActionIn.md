# InsightsServiceApprovalApIs.ActionIn

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**processedBy** | **String** | The person who performs the action | [optional] 
**operation** | **String** | Types of action, may be one of the value (approve, deny, notify, memo, or skip). The stage will be updated according to the operation. | [default to &#39;memo&#39;]
**comments** | **String** | Comments for action | [optional] 


<a name="OperationEnum"></a>
## Enum: OperationEnum


* `approve` (value: `"approve"`)

* `deny` (value: `"deny"`)

* `notify` (value: `"notify"`)

* `memo` (value: `"memo"`)

* `skip` (value: `"skip"`)




