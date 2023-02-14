/* Step 1 : Add event listener to the deposite button */
document.getElementById('btn-deposite').addEventListener('click',function(){
    /* Step 2 : Get the deposite amount from the deposite input field 
        For input field use .value to the value inside the input field
    */
    const depositeField = document.getElementById('deposite-field');
    const newDepositeAmmountString = depositeField.value;
    const newDepositeAmmount = parseFloat(newDepositeAmmountString);
    /* Step 3 : Get the current deposite total
    for non-input( element other then input , textarea ) use innerText to the text
    */
    const depositeTotalElement = document.getElementById('total-deposite');
    const previousDepositeTotalString = depositeTotalElement.innerText;
    const previousDepositeTotal = parseFloat(previousDepositeTotalString);  

    /* Step 4 : Add numbers to set the total Deposite */
    const currentDepositeTotal = previousDepositeTotal + newDepositeAmmount;
    //set the deposite total 
    depositeTotalElement.innerText = currentDepositeTotal;

    /* Step 5 : Get Balance Total */
    const totalBalace = document.getElementById('total-balance');
    const previousTotalBalanceString = totalBalace.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString); 

    /* Step 6: Calculate current Total balance */
    const currentTotalBalance = previousTotalBalance + newDepositeAmmount;
    totalBalace.innerText = currentTotalBalance;
    //set the Balance total 
    depositeTotalElement.innerText = currentDepositeTotal;

    /* Step 8 : clear the deposite field*/
    depositeField.value = '';
    withdrawField.value = '';
})