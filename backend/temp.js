function shuffleNonConsecutive(array) {
    const consecutiveGroups = [];
    let currentGroup = [];

    for (const element of array) {
        if (currentGroup.length === 0 || element - currentGroup[currentGroup.length - 1] === 1) {
            currentGroup.push(element);
        } else {
            consecutiveGroups.push([...currentGroup]);
            currentGroup = [element];
        }
    }

    consecutiveGroups.push([...currentGroup]);

    for (const group of consecutiveGroups) {
        if (group.length > 1) {
            shuffleArray(group);
        }
    }

    const shuffledArray = consecutiveGroups.flat();
    return shuffledArray;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Example usage
const array1 = [1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10];
const array2 = shuffleNonConsecutive(array1.slice());

console.log("Original array:", array1);
console.log("Shuffled array:", array2);
