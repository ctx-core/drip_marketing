declare const window
export function push_drip(...arg_a1:unknown[]) {
	if (typeof window._dcq !== 'undefined') {
		window._dcq.push(...arg_a1)
	}
}
export {
	push_drip as push__drip
}
