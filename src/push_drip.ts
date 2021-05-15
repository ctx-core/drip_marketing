// declare const window
export function push_drip(...arg_a1:object[]) {
	if (typeof window._dcq !== 'undefined') {
		window._dcq.push(...arg_a1)
	}
}
declare global {
	interface Window {
		_dcq?:object[]
	}
}
export {
	push_drip as push__drip
}
