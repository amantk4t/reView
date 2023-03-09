export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-951c4965.js","imports":["_app/immutable/start-951c4965.js","_app/immutable/chunks/index-65f35d91.js","_app/immutable/chunks/singletons-e70a0820.js","_app/immutable/chunks/control-ba37bfb4.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/4.js')
		],
		routes: [
			{
				id: "/detail/[slug]",
				pattern: /^\/detail\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
