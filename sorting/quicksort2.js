function sort(nums) {
    if ( nums.length === 0) return nums;
    const left = [];
    const right = [];
    const pivot = nums[0];
    for ( let i = 1; i < nums.length; i++ ) {
        const num = nums[i];
        if ( pivot > num ) {
            left.push(num);
        } else if ( pivot < num ) {
            right.push(num);
        }
    }
    const merge = sort(left).concat(pivot, sort(right));
    if ( merge.length > 1 ) console.log(merge.join(' '));
    return merge;
}

function processData(input) {
    const nums = input.split('\n')[1].split(' ').map(Number);
    sort(nums);
}