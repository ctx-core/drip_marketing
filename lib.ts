declare const window
export function push__drip(...arg_a1:unknown[]) {
	if (typeof window._dcq !== 'undefined') {
		window._dcq.push(...arg_a1)
	}
}
