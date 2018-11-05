function swap(index1, index2) {
    if (index1 > index2) {
        let temp = index1;
        index1 = index2;
        index2 = temp;
    }
    return [index1, index2];
}

function bubbleSort(array) {
    let rounds = array.length - 1;
    while (rounds > 0) {
        for (let index = 0; index < rounds; index++) {
            let tempArray = swap(array[index], array[index + 1]);
            array[index] = tempArray[0];
            array[index + 1] = tempArray[1];
        }
        rounds--;
    }
    return array;
}