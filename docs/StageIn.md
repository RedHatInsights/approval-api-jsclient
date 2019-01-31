# InsightsServiceApprovalApIs.StageIn

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**groupId** | **String** | Associated group id | 
**state** | **String** | The state of stage or request. It may be one of values (pending, skipped, notified or finished) | [default to &#39;pending&#39;]
**decision** | **String** | Final decision, may be one of the value (undecided, approved, or denied) | [default to &#39;undecided&#39;]


<a name="StateEnum"></a>
## Enum: StateEnum


* `pending` (value: `"pending"`)

* `skipped` (value: `"skipped"`)

* `notified` (value: `"notified"`)

* `finished` (value: `"finished"`)




<a name="DecisionEnum"></a>
## Enum: DecisionEnum


* `undecided` (value: `"undecided"`)

* `approved` (value: `"approved"`)

* `denied` (value: `"denied"`)




