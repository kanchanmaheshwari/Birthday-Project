import {auth, signInWithEmailAndPassword, db, ref, child, get} from './firebase.js'
$(document).ready(()=>{
    $('button').on('click',(e)=>{
        e.preventDefault()

      

        const email = $('#login-email').val()
        const password = $('#login-password').val()
        // console.log(email)
        // console.log(password)

                   // database
            // console.log(email)
            // console.log(password)
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // console.log(user)
                const userKey = user.uid
                const dbRef = ref(db);
                get(child(dbRef, `Users/${userKey}`)).then((snapshot) => {
                    if (snapshot.exists()) {
                        console.log(snapshot.val());
                        let name = snapshot.val().Username
                        let dateofbirth = snapshot.val().Dateofbirth
                        localStorage.setItem('name', name)
                        localStorage.setItem('dateofbirth', dateofbirth)
                        window.location.href='Birthdate.html'

                    } else {
                      console.log("No data available");
                    }
                  }).catch((error) => {
                    console.error(error);
                  });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });
            
        }
    )
})