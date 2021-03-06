function isParityMatch(index: number, value: number): boolean {
    return (index % 2) === (value % 2);
}

function sortArrayByParityII(nums: number[]): number[] {
    let oddIndex = 1
    for(let evenIndex=0; evenIndex < nums.length; evenIndex += 2) {
        while (!isParityMatch(evenIndex, nums[evenIndex])) {
            if(!isParityMatch(oddIndex, nums[oddIndex])) {
                [nums[evenIndex], nums[oddIndex]] = [nums[oddIndex], nums[evenIndex]];
            }
            oddIndex += 2;
        }
    }
    return nums
};
