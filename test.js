const rekd = (str, num = 1) => {
    // grab however many rekt you want
    //boolean for change with a count < num
    // 
    let check = true;
    const arr = [];
    let reverseArr = [];
    while (arr.length < 1 + (str.length - 1) * num) {
        if (check && arr.length === 0) {
            for (let i = 0; i < str.length; i++) {
                arr.push(str[i])
                if (i === str.length - 1) { check = !check }
            }
        }
        else if (check) {
            for (let i = 1; i < str.length; i++) {
                arr.push(str[i])
                if (i === str.length - 1) { check = !check }
            }
        }
        else {
            for (let i = str.length - 2; i >= 0; i--) {
                arr.push(str[i])
                if (i === 1) { check = !check }
            }
        }
    }
    if (num === 2) {
        let check2 = true;
        while (reverseArr.length < 1 + (str.length - 1) * num) {
            if (check2 && reverseArr.length === 0) {
                for (let i = str.length - 1; i >= 0; i--) {
                    reverseArr.push(str[i])
                    if (i === str.length - 1) { check2 = !check2 }
                }
            }
            else if (check2) {
                for (let i = str.length - 1; i < 0; i--) {
                    reverseArr.push(str[i])
                    if (i === str.length - 1) { check2 = !check2 }
                }
            }
            else {
                for (let i = 1; i < str.length; i++) {
                    reverseArr.push(str[i])
                    if (i === 1) { check2 = !check2 }
                }
            }
        }
    }
    else{reverseArr = arr.reverse();}
    
    let count = 1
    let check3 = true;
    return arr.reduce((acc, letter, i, list) => {
        // if index + 1 is the same as the length of the word
        if (i === 0) acc.push([...arr])
        else if (i === (str.length - 1) * count && check) {
            check3 ? acc.push(reverseArr) : acc.push(arr);
            count++
            check3 = !check3
        }

        else {
            const result = [letter]
            for (let j = 0; j < arr.length - 2; j++) {
                let count = 1;
                if (j === (str.length - 2) * count) {
                    result.push(arr[i])
                    count++
                }
                else { result.push(null) }
            }
            result.push(list[list.length - 1 - i])
            acc.push(result);
        }
        return acc;
    }, [])

}


console.log(rekd('leon', 2))