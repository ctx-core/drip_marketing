export function drip__push(...arg_a) {
	if (typeof window._dcq !== 'undefined') {
		window._dcq.push(...arg_a)
	}
}
export {
	drip__push as push_drip,
	drip__push as push__drip,
}
