import{auth, signOut, db, ref, get, child } from './firebase.js'
const quoteURL = 'https://type.fit/api/quotes'
$(document).ready(()=>{
    let name = localStorage.getItem('name')
    let dateofbirth = localStorage.getItem('dateofbirth')
    if(name){
        // show the name
    
        const dbRef = ref(db);
       
        var currentDate = new Date();
        var day = currentDate.getDate()
        var month = currentDate.getMonth() + 1
        if(month<10){
            month = '0' + month
        }
        var year = currentDate.getFullYear()

        var newDateOfBirth = dateofbirth.split('-')
        var yearOfBirth = newDateOfBirth[0]
        
        var dateCurrent = yearOfBirth + '-' + month + '-' + day
        console.log(dateCurrent)
        

        const date1 = new Date(dateCurrent);
        const date2 = new Date(dateofbirth);
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24)); 
        console.log(diffDays + " days");

        // // if diffdays == 0 then show on the page
        // // else show the number on page

        if(diffDays == 0){
            fetch(quoteURL)
            .then(response=>{
                    // console.log(response.json())
                    return response.json()
            })
            .then(response=>{
                let quoteData = response

                const random = Math.floor(Math.random() * quoteData.length);
                console.log(quoteData[random])
    
                $('#title').text('Happy Birthday,'+name)
                $('#quoteText').text(quoteData[random].text)
                $('#quoteAuthor').text(quoteData[random].author)

            })
            

        } else {
            $('#title').text(diffDays+' Days Left')
        }

    }

    $($('button')[0]).on('click', ()=>{

        signOut(auth)
        .then(() => {
            // Sign-out successful.
            localStorage.removeItem('name')
            window.location.href="login.html"
          })
        .catch((error) => {
            console.log(error)  
        });
    })
    $($('button')[1]).on('click', ()=>{
        window.location.href="signup.html"
    })
})