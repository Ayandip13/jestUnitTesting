import { getUser, User } from "./db";

export function getUserById(id: number): string {
    const user: User = getUser(id)
    return `Hello, ${user.userName}`
}