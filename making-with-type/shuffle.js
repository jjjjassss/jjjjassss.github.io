document.addEventListener('DOMContentLoaded', function() {
    // Three arrays of classes to choose from
    const firstSet = ['a', 'b', 'c'];
    const secondSet = ['x', 'y', 'z'];
    const thirdSet = ['one', 'two', 'three'];
    const allSets = firstSet.concat(secondSet, thirdSet); // Combine all sets for easier removal

    // Function to add a combination of random classes to each div
    function addRandomClasses() {
        // Select all divs with class 'random'
        const divs = document.querySelectorAll('.random');

        divs.forEach(div => {
            // Remove only the classes from the specified sets
            allSets.forEach(cls => {
                if (div.classList.contains(cls)) {
                    div.classList.remove(cls);
                }
            });

            // Generate a random class from each set
            const randomClass1 = firstSet[Math.floor(Math.random() * firstSet.length)];
            const randomClass2 = secondSet[Math.floor(Math.random() * secondSet.length)];
            const randomClass3 = thirdSet[Math.floor(Math.random() * thirdSet.length)];

            // Add the randomly selected classes
            div.classList.add(randomClass1, randomClass2, randomClass3);
        });
    }

    // Set an interval to add a combination of random classes to all matching divs every 2 seconds
    setInterval(addRandomClasses, 2000);
});
