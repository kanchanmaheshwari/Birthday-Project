
import {auth, createUserWithEmailAndPassword, db, ref, set} from './firebase.js'
$(document).ready(()=>{
    $('button').on('click',(e)=>{
        e.preventDefault()

        
        const username = $($('.form-control')[0]).val()
        const dateofbirth = $($('.form-control')[1]).val()
        const email = $($('.form-control')[2]).val()
        const password = $($('.form-control')[3]).val()

        var currentDate = new Date();
        var day = currentDate.getDate()
        var month = currentDate.getMonth() + 1
        if(month<10){
            month = '0' + month
        }
        var year = currentDate.getFullYear()
        
        $($('.form-control')[1]).attr('max', year+month+day)
        
        const userData = {Username: username, Dateofbirth: dateofbirth, 
            Email: email, password: password}
        
        
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            const userKey = user.uid
            // save into db
            set(ref(db, 'Users/' + userKey), userData)
            .then(()=>{
                localStorage.setItem('name', username)
                localStorage.setItem('dateofbirth', dateofbirth)
                window.location.href = "Birthdate.html"
            })
            
        })


        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
        });
    })
})


