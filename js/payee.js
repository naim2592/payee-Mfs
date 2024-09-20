document.getElementById('btn-login')
    .addEventListener('click',function(event){
        // prevent default behaviour 
        event.preventDefault(); //vejal for beginners 
        console.log('nusrat');
        //takes the values
        const phoneNumber=document.getElementById('phone-number').value 
        const pinNumber=document.getElementById('pin-number').value 
        
        if(phoneNumber==='01568550778' && pinNumber==='6246'){
            console.log('you are logged in');
            window.location.href='homepage.html'
            
        }
        else{
            alert('your phn and pin is incorrect')
        }
        
        
    })