import { entries, keys, dispatch } from 'd3';

import DefaultConfig from './defaultConfig';

const initState = (data, userConfig) => {
	const config = Object.assign({}, DefaultConfig, userConfig);
	config.data = data;
	config.vars = keys(data[0]);

	const eventTypes = [
		// 'data', // when data in a chart is updated, how does this cascade to linked?
		// 'render',
		// 'resize',
		// 'highlight',
		// 'mark',
		'brush',
		'brushend',
		'brushstart',
		// 'axesreorder',
	].concat(keys(config));

	const events = dispatch.apply(this, eventTypes),
		flags = {
			linked: false,
			grid: false,
			// axes: false,
			// interactive: false,
			// debug: false,
		};
	// xscale = scalePoint(),
	// dragging = {},
	// axis = axisLeft().ticks(5),
	// ctx = {},
	// canvas = {};

	return {
		config,
		events,
		eventTypes,
		flags,
	};
};

export default initState;