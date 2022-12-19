export const internalCache = {
    get: (name) => {
        return JSON.parse(localStorage.getItem(name));
    },
    set: (name, data) => {
        localStorage.setItem(name, JSON.stringify(data));
    },
    delete: (name) => {
        localStorage.removeItem(name);
    },
}