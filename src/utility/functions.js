export const shortenString = (string, desiredLength) => {
    return (string.length > desiredLength) ?
        string.substring(0, desiredLength) + '...' :
        string;
}