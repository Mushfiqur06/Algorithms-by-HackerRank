function bigSorting(arr) {
    const results = arr.sort((a,b) => {
        if(a.length !== b.length){
            return a.length - b.length;
        }
        else{
            for(let i = 0; i < a.length; i++){
                if(parseInt(a[i]) !== parseInt(b[i])){
                    return parseInt(a[i]) - parseInt(b[i]);
                }
            }
        }
    });
    return results;
}