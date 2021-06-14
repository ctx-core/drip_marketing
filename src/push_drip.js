// declare const window
export function push_drip(...arg_a) {
    if (typeof window._dcq !== 'undefined') {
        window._dcq.push(...arg_a);
    }
}
export { push_drip as push__drip };
//# sourceMappingURL=src/push_drip.js.map