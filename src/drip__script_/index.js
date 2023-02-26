import { import_meta_env_ } from '@ctx-core/env'
import { missing_argument__throw } from '@ctx-core/error'
import { clone } from '@ctx-core/object'
export function drip__script_(...param_a) {
	const param = clone(...param_a)
	const DRIP_ID = param.DRIP_ID || import_meta_env_().DRIP_ID
	if (!DRIP_ID) missing_argument__throw(param, {
		key: 'import.meta.env.DRIP_ID'
	})
	//language=html
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
export {
	drip__script_ as _drip_script,
	drip__script_ as _drip__script,
}
