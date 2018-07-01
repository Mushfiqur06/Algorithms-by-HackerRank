function main() {
    var n = parseInt(readLine());
    var output = [];

    for(var a0 = 0; a0 < n; a0++){
        var x_temp = readLine().split(' ');
        var x = parseInt(x_temp[0]);
        var s = x_temp[1];

        if(a0 < (n/2)){
            output[x] ? output[x] += "- " : output[x] = "- "
        } else {
            output[x] ? output[x] += s + " " : output[x] = s + " "
        }
    }
    console.log(output.join(""));
}