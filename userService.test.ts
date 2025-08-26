import { getUserById } from "./userService"

test('returns greetings with userName', () => {
    const greeting = getUserById(1)
    expect(greeting).toBe('Hello, test')
})