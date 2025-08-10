const areAttriputesEqual = (attrs1, attrs2) => {
    if (attrs1.length !== attrs2.length) return false;

    for (const attr1 of attrs1) {
        const attr2 = attrs2.find(a => a.name === attr1.name);
        if (!attr2) return false;
        const val1 = attr1.value;
        const val2 = attr2.value;
        
        if (val1 !== val2) {
            return false;
        }
    }

    return true;
};

export default areAttriputesEqual;