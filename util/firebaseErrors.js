const  firebaseErrorsHandler = (error) => {
    if(error.code == "auth/email-already-in-use"){
        return {
            name: 'email',
            message: error.message
        }
    }
    if(error.code == "auth/invalid-email"){
        return {
            naùe: 'email',
            message: error.message
        }
    }
    if(error.code == "auth/operation-not-allowed"){
        return {
            name: 'email',
            message: 'Operation not allowed, try again later!'
        }
    }
    if(error.code == "auth/weak-password"){
        return {
            name: 'password',
            message: error.message
        }
    }
    if(error.code == "auth/user-disabled"){
        return {
            name: 'email',
            message: error.message
        }
    }
    if(error.code == "auth/user-not-found"){
        return {
            name: 'email',
            message: error.message
        }
    }
    if(error.code == "auth/wrong-password"){
        return {
            name: 'password',
            message: error.message
        }
    }
}
export default firebaseErrorsHandler;