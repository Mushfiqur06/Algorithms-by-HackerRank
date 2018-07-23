function minimumNumber(n, password) {
    const c = [/[0-9]/, /[a-z]/, /[A-Z]/, /[!@#$%^&*()\-+"]/].map(r => !r.test(password))
            .filter(Boolean).length
    
    return Math.max(c,6-n);
    

}