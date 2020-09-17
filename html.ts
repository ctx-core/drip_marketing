import { clone } from '@ctx-core/object'
import { error_ctx_type, throw_missing_argument } from '@ctx-core/error'
export function _drip_script(...opt_a1) {
	const opts = clone(...opt_a1) as _drip_script_opts_type
	const DRIP_ID = opts.DRIP_ID || process.env.DRIP_ID
	if (!DRIP_ID) throw_missing_argument(opts, { key: 'process.env.DRIP_ID' } as error_ctx_type)
return `
<script type="text/javascript">
if (typeof window._dcq === 'undefined') {
	var _dcq = _dcq || [];
	var _dcs = _dcs || {};
	_dcs.account = '${DRIP_ID}';

	(function() {
		var dc = document.createElement('script');
		dc.type = 'text/javascript'; dc.async = true;
		dc.src = '//tag.getdrip.com/${DRIP_ID}.js';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(dc, s);
	})();			 
}
</script>`.trim()
}
export const _drip__script = _drip_script
export type _drip_script_opts_type = error_ctx_type & {
	DRIP_ID: string
}
