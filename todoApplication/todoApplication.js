import { LightningElement } from 'lwc';

export default class TodoApplication extends LightningElement {


taskName;
taskDate;
inCompletedItems=[];
completedItems=[];
handleReset()
{

this.taskName='';
this.taskDate='';
   
}
handleChange(event){
    if(event.target.name=='taskName')
    {
        this.taskName=event.target.value;
        
    }
    if(event.target.name=='date')

        {
            this.taskDate=event.target.value;
            
        }


}
handleAddTask(event){
 let invalid=true;

if(!this.taskDate){
    this.taskDate= new Date().toISOString().slice(0,10);

}
else{
    this.inCompletedItems=[
        ...this.inCompletedItems,
       {
        taskName:this.taskName,
        taskDate:this.taskDate
       }


    ];
 console.log(JSON.stringify(this.inCompletedItems));
 this.handleReset();
}

 


}

sortTask(inputArray)
   {
     let sortedArray= inputArray.sort((A,B)=>
      {
        const dateA=new Date(A.taskDate);
        const dateB=new Date(B.taskDate);

        return dateA-dateB;


      })
       return sortedArray;

   }

handleDelete(event){
let index=event.target.name;


let deletedItem = this.inCompletedItems.splice(index, 1);
let sortArray=this.sortTask(this.inCompletedItems);
this.inCompletedItems=[...sortArray];


}
handleCompletedItems(event)
{
     
    let index=event.target.name;


    let deletedItem = this.inCompletedItems.splice(index, 1);
    let sortArray=this.sortTask(this.inCompletedItems);
    this.inCompletedItems=[...sortArray];
    
    this.completedItems=[...this.completedItems,deletedItem[0]];
    let sortArrayCompleted=this.sortTask(this.completedItems);
    this.completedItems=[...sortArrayCompleted];




}
handleCompleteDelete(event)
{
    let index=event.target.name;


    let deletedItem = this.completedItems.splice(index, 1);
    let sortArray=this.sortTask(this.completedItems);
    this.completedItems=[...sortArray];


}


}