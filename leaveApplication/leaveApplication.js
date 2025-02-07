import { LightningElement,wire,api } from 'lwc';
import leavesForApproval  from '@salesforce/apex/leaveReuestsController.leavesForApproval';

export default class LeaveApplication extends LightningElement {

  Data;
  leavesForApprove;


@wire(leavesForApproval)
LeaveApprovalData({data,error})
{
    
    this.leavesForApprove=data;

}

}