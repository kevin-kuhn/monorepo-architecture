import { hello } from '../oioi'

describe("hello", () => {
		it("should return hello world", () => {
				expect(hello()).toBe("hello world")
		})
})