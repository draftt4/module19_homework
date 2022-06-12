var dictionary = Object.create(null, {
    destructor: { value: "A destructive element" }
});

function getDefinition(word) {
    return dictionary[word];
}

// Outputs: "A destructive element"
console.log(getDefinition("destructor"));

// Outputs: undefined
console.log(getDefinition("constructor"));