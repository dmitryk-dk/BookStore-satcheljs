export default function makePurchase(items) {
    // We are pretending to make a call. Usually this is where you would put "fetch" calls
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 5000);
    });
}
