function myEach(collection, callback) {
    let newCollection = [...collection];

    if (collection instanceof Array === false) {
        newCollection = Object.values(collection);
    }
    for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i]);
    }
    return collection;
}
