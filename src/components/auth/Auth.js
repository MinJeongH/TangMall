const fakeAuthProvider = {
    isAuth: false,
    sigin(callback) {
        fakeAuthProvider.isAuth = true;
        setTimeout(callback,100)
    },
    signout(callback){
        fakeAuthProvider.isAuth=false;
        setTimeout(callback,100);
    }
}

export default fakeAuthProvider;