// toggle
document.getElementById('add-btn').addEventListener('click',function(){
    const cashIn=document.getElementById('cashin')
    cashIn.classList.remove('hidden')
    const cashOut=document.getElementById('cashout')
    cashOut.classList.add('hidden')
    
})
// out
document.getElementById('out-btn').addEventListener('click',function(){
    const cashOut=document.getElementById('cashout')
    cashOut.classList.remove('hidden')
    const cashIn=document.getElementById('cashin')
    cashIn.classList.add('hidden')
    
})





document.getElementById('addmoney-btn').addEventListener('click',function(event){
    event.preventDefault() ;
    const amount=document.getElementById('amount').value
    const pin=document.getElementById('pin').value
    if(pin==='6246'){
      const previous=document.getElementById('pBalance').innerText
      
      const  pBallance=Number(previous)
      const addBalance=Number(amount)
      const newBalance=pBallance+addBalance
      console.log(newBalance);
      document.getElementById('pBalance').innerText=newBalance
      
        
    }
    else{
          alert('Sorry money is not added, try again later')
    }

    
    
    
    
})
// cashout js

document.getElementById('cashout-btn').addEventListener('click',function(event){
    event.preventDefault() ;
    const amount=document.getElementById('cashout-amount').value
    const pin=document.getElementById('cashout-pin').value
    if(pin==='6246'){
      const previous=document.getElementById('pBalance').innerText
      
      const  pBallance=Number(previous)
      const addBalance=Number(amount)
      const newBalance=pBallance-addBalance
      console.log(newBalance);
      document.getElementById('pBalance').innerText=newBalance
      
        
    }
    else{
          alert('Sorry money is not added, try again later')
    }

    
    
    
    
})
