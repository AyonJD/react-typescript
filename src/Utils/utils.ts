export const _retriveStorage = (key: string) => {
    try {
        const value = localStorage.getItem(key);
        if (value !== null) {
            return value;
        } else {
            return null;
        }
    } catch (error) {
        return null;
    }
};