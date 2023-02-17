function fruits() {
    if (true) {
        var fruit1 = "Apple";       // function scoope
        let fruit2 = "Kiwi";        // Block scoope
        const fruit3 = "Banana";    // Block scoope
        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit1);
}

fruits();