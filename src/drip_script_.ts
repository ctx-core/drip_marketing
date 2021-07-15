import { clone } from '@ctx-core/object'
import { error_ctx_I, throw_missing_argument } from '@ctx-core/error'
export function drip_script_(...param_a:Partial<_drip_script_param_I>[]):string {
	const param:_drip_script_param_I = clone(...param_a)
	const DRIP_ID = param.DRIP_ID || process.env.DRIP_ID
	if (!DRIP_ID) throw_missing_argument(param, { key: 'process.env.DRIP_ID' } as error_ctx_I)
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
export interface _drip_script_param_I extends error_ctx_I {
	DRIP_ID:string
}
export {
	drip_script_ as _drip_script,
	drip_script_ as _drip__script,
}
