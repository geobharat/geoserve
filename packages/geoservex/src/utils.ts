

export function isArray<T extends any>(input: T): Boolean {
    if (Array.isArray(input)) {
        return true
    }
    else {
        return false
    }
}