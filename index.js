function myEach(collection, callback) {
    let newCollection = Array.isArray(collection)
        ? collection
        : Object.values(collection);

    for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i]);
    }

    return collection;
}

function myMap(collection, callback) {
    let newCollection = Array.isArray(collection)
        ? collection
        : Object.values(collection);

    const newArray = [];

    for (let i = 0; i < newCollection.length; i++) {
        const newItem = callback(newCollection[i]);
        newArray.push(newItem);
    }
    return newArray;
}

//accumulator is optional in myReduce
function myReduce(collection, callback, acc) {
    let newCollection = Array.isArray(collection)
        ? collection
        : Object.values(collection);

    let i = 0;

    if (!acc) {
        acc = newCollection[0];
        i = 1;
    }

    for (; i < newCollection.length; i++) {
        acc = callback(acc, newCollection[i]);
    }

    return acc;
}

function myFind(collection, predicate) {
    let newCollection = Array.isArray(collection)
        ? collection
        : Object.values(collection);

    for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i])) {
            return newCollection[i];
        }
    }
}

function myFilter(collection, predicate) {
    let newCollection = Array.isArray(collection)
        ? collection
        : Object.values(collection);

    const newArray = [];

    for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i])) {
            newArray.push(newCollection[i]);
        }
    }
    return newArray;
}

function mySize(collection) {
    let newCollection = Array.isArray(collection)
        ? collection
        : Object.values(collection);

    return newCollection.length;
}

function myFirst(array, n) {
    if (!n) {
        return array[0];
    } else {
        return array.slice(0, n);
    }
}

function myLast(array, n) {
    if (!n) {
        return array[array.length - 1];
    } else {
        return array.slice(-n);
    }
}

function myKeys(object) {
    const newArray = [];

    for (let key in object) {
        newArray.push(key);
    }
    return newArray;
}

function myValues(object) {
    const newArray = [];

    for (let key in object) {
        newArray.push(object[key]);
    }
    return newArray;
}
