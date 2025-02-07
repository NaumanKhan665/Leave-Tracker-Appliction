import { LightningElement,api,wire } from 'lwc';
import getLeaveRequests  from '@salesforce/apex/leaveReuestsController.getLeaveRequests';

const columns = [
  
    { label: 'Request Id', fieldName: 'Name',cellAttributes: { class: { fieldName: 'statusClass'}}},

    { label: 'From Date', fieldName: 'From_Date__c', type: 'date' ,cellAttributes: { class: { fieldName: 'statusClass'}}},
    { label: 'To Date', fieldName: 'To_Date__c', type: 'date',cellAttributes: { class: { fieldName: 'statusClass'}}},
    { label: 'Reason', fieldName: 'Reson__c',cellAttributes: { class: { fieldName: 'statusClass'}}},
    { label: 'Status', fieldName: 'Status__c', type: 'picklist',cellAttributes: { class: { fieldName: 'statusClass'}}},
    { label: 'Manager Comments', fieldName: 'Manager_Comment__c',cellAttributes: { class: { fieldName: 'statusClass'}}},
    {
        type: 'button',
        typeAttributes: {
         label: 'Edit ',
          name: 'edit',
          disabled:{fieldName:'isEditDisabled'}
        }
      }
];
export default class MyLeaves extends LightningElement {
 columns = columns;
showData=[];
isModalPopupdisabled=false;
objectApiName="LeaveRequest__c";
recordId='';


@wire(getLeaveRequests)
LeavesRequstsData(result)
{

   
    if (result.data) {
        this.showData = result.data.map(a => ({
            ...a,
            statusClass: a.Status__c == 'Approved' ? 'slds-theme_success' : a.Status__c == 'Rejected' ? 'slds-theme_warning' : '',
            isEditDisabled: a.Status__c != 'Pending'
        }));
    }
    if (result.error) {
        console.log('Error occured while fetching my leaves- ', result.error);
    }
}

handleRowAction(event)
{

    this.isModalPopupdisabled=true;
 // event.detail.row;
 this.recordId=event.detail.row.Id;




}
closePopupHandler(){

    this.isModalPopupdisabled=false;
}

succesFormHandler()
{
    this.isModalPopupdisabled=false;

}

}