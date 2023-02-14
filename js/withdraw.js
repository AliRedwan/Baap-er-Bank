/* Step 1: Add eventListner to the withdraw button */
document.getElementById('btn-withdraw').addEventListener('click',function(){
    /* Step 2: Get the amount from the withdraw input field */
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    /* Step 3 : Get previous Total*/
    const withdrawTotalElment = document.getElementById('withdraw-total');
    const previousTotalWithdrawString = withdrawTotalElment.innerText;
    const previousTotalWithdraw = parseFloat(previousTotalWithdrawString);
    /* Step 4 : Set Total ammount withdraw Ammount  */
    const currentTotalWithdraw =previousTotalWithdraw + newWithdrawAmount  ;
    withdrawTotalElment.innerText = currentTotalWithdraw;

    /* Step 5: Get the previous  Total balance */
    const balanceTolalElement = document.getElementById('total-balance');
    const previousTotalBalanceString = balanceTolalElement.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString);

    /* Step 6: calculate new balance total */
    const currentTotalBalance = previousTotalBalance - newWithdrawAmount;
    balanceTolalElement.innerText = currentTotalBalance;



    /* Step 7: Clear The input field */

    withdrawField.value = '';
})