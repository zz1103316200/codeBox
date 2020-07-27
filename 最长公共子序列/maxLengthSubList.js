function maxLengthOfSubList(list) {
    let max_length = 0;
    let start = 0;
    const temp = {};
    for (let i = 0, len = list.length; i < len; i ++) {
        const item = list[i];
        if (temp[item] && temp[item] > start)  {
            start = temp[item] + 1;
        }
        temp[item] = i;
        const now_length = i - start + 1;
        max_length = max_length - now_length > 0 ? max_length : now_length;
    }
}
