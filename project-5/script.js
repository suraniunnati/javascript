class Account {
    constructor( accountNumber,accountHolder,balance){
        this.accountNumber = accountNumber,
        this.accountHolder = accountHolder,
        this.balance = balance
    }

    checkBalance(){

        document.querySelector(`#btn1`).addEventListener("click",()=>{
            document.getElementById("result").innerHTML=`${this.balance}`
        })
    }

    deposit(){
        document.querySelector(`#btn2`).addEventListener("click",()=>{
             document.querySelector("#amount").style.display="block"        
        })

        document.querySelector(`#enter`).addEventListener("click",()=>{
             document.querySelector("#amount").style.display="none"
            const amount = Number(document.getElementById('amount').value);
            if (amount > 0) {
                let add = this.balance += amount;
                document.getElementById('result').innerHTML = `Deposit successful! New balance: ${add}`;
            } else {
                document.getElementById('result').innerHTML = 'Please enter a valid amount to deposit.';
            }
        })

    }

    withdraw(){
        document.querySelector(`#btn3`).addEventListener("click",()=>{
        //        document.querySelector("#amount").style.display="block"
  
        // })

        // document.querySelector(`#enter`).addEventListener("click",()=>{
        //     document.querySelector("#amount").style.display="none"
            
            const amount = Number(document.getElementById('amount').value);
            if (amount > 0 && amount <= this.balance) {
                let sub= this.balance -= amount;
                document.getElementById('result').innerHTML = `Withdrawal successful! New balance: $${sub}`;
            } else if (amount > this.balance) {
                document.getElementById('result').innerHTML = 'Insufficient balance for withdrawal.';
            } else {
                document.getElementById('result').innerHTML = 'Please enter a valid amount to withdraw.';
            }
        })
    
      
    }
}

const Account1 = new Account("12345","misti",5000);
Account1.checkBalance()

 Account1.deposit()
Account1.withdraw(4000)

