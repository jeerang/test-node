
const startHelloWorld = (interval = 3000) => {
    let worldCount = 1;
    const id = setInterval(() => {
        console.log('hello' + ' world'.repeat(worldCount));
        worldCount++;
    }, interval);
    return () => clearInterval(id);
};

exports.startHelloWorld = startHelloWorld;


const stop = startHelloWorld();

