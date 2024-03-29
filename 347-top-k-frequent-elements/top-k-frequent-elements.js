/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    if(nums.length === 1){
        return nums
    }
    
    const map = new Map();
    const result = [];

    for(let i = 0; i < nums.length; i ++){
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
    }

    const count = new Array(nums.length);

    for (let [key, value] of map) {
        if(!count[value]){
            count[value] = new Array();
        }
        count[value].push(key);
    }

    let right = count.length;

    while(result.length < k){
        if(!count[right]){
            right--;
            continue;
        } else{
            result.push(...count[right])
            right--;
        }

    }

    return result;

};