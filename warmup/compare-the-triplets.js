function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a0A1A2 = readLine().split(' ');

    const a0 = parseInt(a0A1A2[0], 10);

    const a1 = parseInt(a0A1A2[1], 10);

    const a2 = parseInt(a0A1A2[2], 10);

    const b0B1B2 = readLine().split(' ');

    const b0 = parseInt(b0B1B2[0], 10);

    const b1 = parseInt(b0B1B2[1], 10);

    const b2 = parseInt(b0B1B2[2], 10);

    let result = solve(a0, a1, a2, b0, b1, b2);

    ws.write(result.join(" ") + "\n");

    ws.end();
    
    function solve(){
        var argument =  Array.prototype.slice.call(arguments);
        var a = 0,b = 0;
        var alice = argument.splice(0,argument.length/2); 
        var bob = argument.splice(0,argument.length);
        for(var i = 0; i < alice.length;i++){
            if(alice[i] > bob[i]){
                a++;
            }
            if(alice[i] < bob[i]){
                b++;
            }
        }
        return [a,b];
    }
}