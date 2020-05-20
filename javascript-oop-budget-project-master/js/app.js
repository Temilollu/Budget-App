class UI {
  constructor() {
    this.budgetFeedback = document.querySelector(".budget-feedback");
    this.expenseFeedback = document.querySelector(".expense-feedback");
    this.budgetErrorMessage = document.querySelector('.bud')
    this.budgetForm = document.getElementById("budget-form");
    this.budgetInput = document.getElementById("budget-input");
    this.budgetAmount = document.getElementById("budget-amount");
    this.expenseAmount = document.getElementById("expense-amount");
    this.balance = document.getElementById("balance");
    this.balanceAmount = document.getElementById("balance-amount");
    this.expenseForm = document.getElementById("expense-form");
    this.expenseInput = document.getElementById("expense-input");
    this.amountInput = document.getElementById("amount-input");
    this.expenseList = document.getElementById("expense-list");
    this.itemList = [];
    this.total;
   this.budgetValue;
   this.expensesAmt;
   this.expensesDesc;
    this.itemID = 0;
    this.budgetForm.addEventListener('submit', this.handleBudgetSubmit.bind(this))
    this.expenseForm.addEventListener('submit',this.handleExpenseSubmit.bind(this))
  
  }

  //submit budget method

  handleBudgetSubmit(e){
    e.preventDefault()
    this.budgetValue = this.budgetInput.value 
     if(this.budgetValue == '' || this.budgetValue <= 0){
       this.budgetErrorMessage.style.display = 'block'
     }
     else{
      this.budgetErrorMessage.style.display = 'none'
      this.appendBudgetSubmit()
      
     }
     
  }

  appendBudgetSubmit(){
 this.budgetValue = this.budgetInput.value 
   this.budgetAmount.textContent = this.budgetValue
   this.budgetInput.value = ''

 if( this.expensesAmt == undefined){
    this.total = 0
  }
    this.balanceAmount.textContent = this.budgetValue - this.total
  }

handleExpenseSubmit(e){
  e.preventDefault()
 this.expensesDesc = this.expenseInput.value
  this.expensesAmt = this.amountInput.value
 if(this.expensesDesc == '' || this.expensesDesc <= 0 || this.expensesAmt == '' || this.expensesAmt <= 0 ){

return
 }


this.itemList.push(parseInt(this.amountInput.value))
 this.total = this.itemList.reduce((prev,curr)=>{
return curr = curr +  prev

})

this.itemID++;
console.log(this.total)
this.expenseAmount.textContent = this.total
this.calculateBalance(this.total)

this.amountInput.value = ''
this.expenseInput.value = ''
let expended = {
  id: this.itemID,
}
this.appendGuys(expended)
}

calculateBalance(total){
if(this.budgetValue == undefined){
  this.budgetValue = 0
    console.log(total)
}

this.balanceAmount.textContent = this.budgetValue - this.total

}


appendGuys(expended){
let expenseTitle = document.createElement('div')
console.log(this.expensesAmt)
expenseTitle.innerHTML = `
        <div class="expense expense-item d-flex justify-content-between align-items-baseline">

         <h6 class="expense-title mb-0 text-uppercase list-item">${this.expensesDesc}</h6>
         <h5 class="expense-amount mb-0 list-item">\$${this.expensesAmt}</h5>
         <div class="expense-icons list-item">
          <a href="#" class="delete-icon" id=${expended.id}>
           <i class="fas fa-trash"></i>
          </a>
         </div>
        </div>
     
`
this.expenseList.append(expenseTitle)
this.handleDeletion(expenseTitle.querySelector('a'))



}



handleDeletion(expenseTitle){ 
  var divs = expenseTitle.parentElement.parentElement.parentElement;
  let id = parseInt(expenseTitle.id)
  console.log(expenseTitle,id) 
expenseTitle.addEventListener('click',()=>{
  divs.style.display = "none";
   console.log(this.itemList)
 
  })
  
     }

// expenseTitle.onclick = () => {
    
//      divs.style.display = "none";    


  //  this.expenseAmount.textContent = this.total - this.expensesAmt
          
         
  
 
       
          

          
}

// handleDeletion(){
//   let deletesButton = document.querySelectorAll('.delete-icon i')
// let myCont = this.expenseAmount
//   let amounts = this.expenseAmount.textContent
// let   userAmount = document.getElementById("amount-input").value;
//   var i;
//       for(i = 0; i < deletesButton.length; i++ ){ 
//           deletesButton[i].onclick = function () {
//              var divs = this.parentElement.parentElement.parentElement.parentElement;
//             console.log(divs)
             
//               let userAmount = divs.querySelector('h5').textContent
//            divs.style.display = "none";
//           myCont.textContent = parseInt(amounts) - parseInt(userAmount) 
// console.log(myCont.textContent)
//           }
          
//       }
// }


new UI