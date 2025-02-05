import date__c from '@salesforce/schema/Account.date__c';
import { LightningElement } from 'lwc';

export default class TodoApp extends LightningElement {

    taskname="";
    taskdate=null;
    incompletetask=[];
    completetask=[];

     
    changeHandler(event)
    {

      let {name,value}=event.target;

      if(name=="taskname"){
        this.taskname=value;
      }
      if(name=="taskdate"){
        this.taskdate=value;
      }


    }

    Reset()
    {

        this.taskname= "";
       this.taskdate=null;

    }
    AddTask()
    {
     
        if(!this.taskdate){
            this.taskdate= new Date().toISOString().slice(0,10);
        }
        if(this.validateTask()){
          

         this.incompletetask=[
            ...this.incompletetask,
            {
                taskname:this.taskname,
                taskdate:this.taskdate
            }
         ];
         console.log(this.incompletetask);
         this.Reset();
          let sortedArray=this.sortTask(this.incompletetask);
            this.incompletetask=[...sortedArray];
            

        }
        

      


    }
    validateTask(){
     let isValid=true;
     let element=this.template.querySelector(".taskname"); 
     if(!this.taskname)
     {
          isValid=false;
     }else
     {        
      
 
        let taskitem= this.incompletetask.find(
            (currentItem)=>
                currentItem.taskname===this.taskname &&
                 currentItem.taskdate===this.taskdate
        
        
        );
        if(taskitem){
          isValid=false;
          element.setCustomValidity("Task is already Exist")
       }


     }
    
     if(isValid)
     {
      
 
      element.setCustomValidity("");

     }
     element.reportValidity();

     return isValid;
    }

   sortTask(inputArray)
   {
     let sortedArray= inputArray.sort((A,B)=>
      {
        const dateA=new Date(A.taskdate);
        const dateB=new Date(B.taskdate);

        return dateA-dateB;


      })
       return sortedArray;

   }

   deleteHandler(event)
   {
         let index=event.target.name;

      this.incompletetask.splice(index,1);
      let sortedArray=this.sortTask(this.incompletetask);
            this.incompletetask=[...sortedArray];
     



   }
   completeTaskHandler(event)
   {  
    let index=event.target.name;
    let removeitem=this.incompletetask.splice(index,1);
    let sortedArray=this.sortTask(this.incompletetask);
            this.incompletetask=[...sortedArray];
    this.completetask = [...this.completetask, removeitem[0]];       


    
   }
     




}