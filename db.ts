export interface User {
    id: number,
    userName: string
}

export function getUser(id: number): User {
    return {
        id,
        userName: "test"
    }
}