document.getElementById('btn-login')
    .addEventListener('click',function(event){
        // prevent default behaviour 
        event.preventDefault(); //vejal for beginners 
        console.log('nusrat');
        //takes the values
        const phoneNumber=document.getElementById('phone-number').value 
        console.log(phoneNumber);
        
        
    })