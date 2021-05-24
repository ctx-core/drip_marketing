import { clone } from '@ctx-core/object';
import { throw_missing_argument } from '@ctx-core/error';
export function _drip_script(...param_a1) {
    const param = clone(...param_a1);
    const DRIP_ID = param.DRIP_ID || process.env.DRIP_ID;
    if (!DRIP_ID)
        throw_missing_argument(param, { key: 'process.env.DRIP_ID' });
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
</script>`.trim();
}
export { _drip_script as _drip__script };
