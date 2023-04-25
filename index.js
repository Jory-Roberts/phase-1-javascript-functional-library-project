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
