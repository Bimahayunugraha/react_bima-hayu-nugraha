import { renderHook, act } from "@testing-library/react-hooks";
import { useInputValue } from "./useInputValue";

describe("custom hook for initial value", () => {
	test("render component", () => {
		const { result } = renderHook(() => useInputValue());

		expect(result.current.onChange).toBeInstanceOf(Function);
	});

	test("new initial value for value", () => {
		const { result } = renderHook(() => useInputValue());

		act(() => {
			result.current.onChange({ target: { value: "new value" } });
		});

		expect(result.current.value).toBe("new value");
	});

	test("new initial value for inner text", () => {
		const { result } = renderHook(() => useInputValue());

		act(() => {
			result.current.onChange({ target: { innerText: "NEW VALUE" } });
		});

		expect(result.current.value).toBe("NEW VALUE");
	});

	test("rerender initial value for value", () => {
		const { result, rerender } = renderHook(() => useInputValue());

		act(() => {
			result.current.onChange({ target: { value: "new value" } });
		});

		rerender("Updated");
		expect(result.current.value).toBe("new value");
	});

	test("rerender initial value for inner text", () => {
		const { result, rerender } = renderHook(() => useInputValue());

		act(() => {
			result.current.onChange({ target: { innerText: "NEW VALUE" } });
		});

		rerender("UPDATED");
		expect(result.current.value).toBe("NEW VALUE");
	});
});
