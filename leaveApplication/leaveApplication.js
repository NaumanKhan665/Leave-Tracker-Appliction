import { LightningElement,wire,api } from 'lwc';
import getLeaveRequests  from '@salesforce/apex/leaveReuestsController.getLeaveRequests';

export default class LeaveApplication extends LightningElement {

  Data;

@wire(getLeaveRequests)
LeavesRequstsData({data,error})
{
    console.log(data);
    this.Data=data;

}


}