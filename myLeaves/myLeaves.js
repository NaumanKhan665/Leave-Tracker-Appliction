import { LightningElement,api } from 'lwc';

const columns = [
  
    { label: 'Request Id', fieldName: 'Name' },
    { label: 'From Date', fieldName: 'From_Date__c', type: 'date' },
    { label: 'To Date', fieldName: 'To_Date__c', type: 'date'},
    { label: 'Reason', fieldName: 'Reson__c'},
    { label: 'Status', fieldName: 'Status__c', type: 'picklist' },
    { label: 'Manager Comments', fieldName: 'Manager_Comment__c'},
    {
        type: 'button',
        typeAttributes: {
         label: 'Edit ',
          name: 'edit'
        }
      }
];
export default class MyLeaves extends LightningElement {
 columns = columns;
@api showData=[];
isModalPopupdisabled=false;
objectApiName="LeaveRequest__c";
recordId='';

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