
var s = 'saveChangeInTheEditor';

function camelCase(s){
    return s.split(/(?=[A-Z])/).length;
}

console.log(camelCase());