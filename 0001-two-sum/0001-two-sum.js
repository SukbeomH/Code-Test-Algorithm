/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i in nums) {
        const j = nums.length - i;
        const diff = target - nums[j];
        const k = nums.indexOf(diff);

        if (k !== -1 && j !== k) {
            return [j, k];
        }
    }
};