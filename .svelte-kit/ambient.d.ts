
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SHELL: string;
	export const SESSION_MANAGER: string;
	export const COLORTERM: string;
	export const HISTCONTROL: string;
	export const XDG_MENU_PREFIX: string;
	export const HISTSIZE: string;
	export const HOSTNAME: string;
	export const NODE: string;
	export const npm_package_devDependencies_tslib: string;
	export const npm_config_ignore_scripts: string;
	export const npm_package_devDependencies__types_cookie: string;
	export const npm_package_devDependencies_autoprefixer: string;
	export const npm_package_devDependencies_tailwindcss: string;
	export const npm_package_scripts_check_watch: string;
	export const SSH_AUTH_SOCK: string;
	export const npm_config_argv: string;
	export const XMODIFIERS: string;
	export const npm_config_bin_links: string;
	export const DESKTOP_SESSION: string;
	export const EDITOR: string;
	export const npm_package_dependencies_axios: string;
	export const PWD: string;
	export const npm_config_save_prefix: string;
	export const npm_package_devDependencies_vite: string;
	export const LOGNAME: string;
	export const XDG_SESSION_DESKTOP: string;
	export const XDG_SESSION_TYPE: string;
	export const npm_package_readmeFilename: string;
	export const SYSTEMD_EXEC_PID: string;
	export const npm_package_scripts_build: string;
	export const _: string;
	export const XAUTHORITY: string;
	export const npm_package_devDependencies_prettier: string;
	export const GDM_LANG: string;
	export const HOME: string;
	export const USERNAME: string;
	export const npm_config_version_git_tag: string;
	export const LANG: string;
	export const npm_package_dependencies_sharpjs: string;
	export const npm_package_devDependencies_typescript: string;
	export const LS_COLORS: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const npm_config_init_license: string;
	export const npm_package_version: string;
	export const VTE_VERSION: string;
	export const WAYLAND_DISPLAY: string;
	export const npm_config_version_commit_hooks: string;
	export const GNOME_TERMINAL_SCREEN: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const INIT_CWD: string;
	export const npm_package_scripts_format: string;
	export const npm_package_scripts_preview: string;
	export const npm_lifecycle_script: string;
	export const npm_package_description: string;
	export const MOZ_GMP_PATH: string;
	export const GNOME_SETUP_DISPLAY: string;
	export const npm_config_version_tag_prefix: string;
	export const YARN_WRAP_OUTPUT: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const XDG_SESSION_CLASS: string;
	export const TERM: string;
	export const npm_package_name: string;
	export const LESSOPEN: string;
	export const npm_package_type: string;
	export const USER: string;
	export const GNOME_TERMINAL_SERVICE: string;
	export const DISPLAY: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const npm_config_version_git_sign: string;
	export const npm_config_version_git_message: string;
	export const npm_package_dependencies_firebase: string;
	export const QT_IM_MODULE: string;
	export const npm_config_user_agent: string;
	export const npm_package_scripts_lint: string;
	export const npm_package_devDependencies__fontsource_fira_mono: string;
	export const npm_execpath: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_scripts_test: string;
	export const XDG_RUNTIME_DIR: string;
	export const npm_package_devDependencies_svelte_preprocess: string;
	export const npm_config_strict_ssl: string;
	export const npm_package_devDependencies_sveltekit_adapter_firebase: string;
	export const npm_package_devDependencies_flowbite_svelte: string;
	export const DEBUGINFOD_URLS: string;
	export const npm_package_scripts_dev: string;
	export const XDG_DATA_DIRS: string;
	export const npm_package_scripts_check: string;
	export const PATH: string;
	export const GDMSESSION: string;
	export const npm_package_devDependencies__neoconfetti_svelte: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const npm_package_devDependencies__playwright_test: string;
	export const npm_package_license: string;
	export const MAIL: string;
	export const npm_config_registry: string;
	export const npm_config_ignore_optional: string;
	export const npm_package_devDependencies_postcss: string;
	export const npm_node_execpath: string;
	export const npm_config_init_version: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {

}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SHELL: string;
		SESSION_MANAGER: string;
		COLORTERM: string;
		HISTCONTROL: string;
		XDG_MENU_PREFIX: string;
		HISTSIZE: string;
		HOSTNAME: string;
		NODE: string;
		npm_package_devDependencies_tslib: string;
		npm_config_ignore_scripts: string;
		npm_package_devDependencies__types_cookie: string;
		npm_package_devDependencies_autoprefixer: string;
		npm_package_devDependencies_tailwindcss: string;
		npm_package_scripts_check_watch: string;
		SSH_AUTH_SOCK: string;
		npm_config_argv: string;
		XMODIFIERS: string;
		npm_config_bin_links: string;
		DESKTOP_SESSION: string;
		EDITOR: string;
		npm_package_dependencies_axios: string;
		PWD: string;
		npm_config_save_prefix: string;
		npm_package_devDependencies_vite: string;
		LOGNAME: string;
		XDG_SESSION_DESKTOP: string;
		XDG_SESSION_TYPE: string;
		npm_package_readmeFilename: string;
		SYSTEMD_EXEC_PID: string;
		npm_package_scripts_build: string;
		_: string;
		XAUTHORITY: string;
		npm_package_devDependencies_prettier: string;
		GDM_LANG: string;
		HOME: string;
		USERNAME: string;
		npm_config_version_git_tag: string;
		LANG: string;
		npm_package_dependencies_sharpjs: string;
		npm_package_devDependencies_typescript: string;
		LS_COLORS: string;
		XDG_CURRENT_DESKTOP: string;
		npm_config_init_license: string;
		npm_package_version: string;
		VTE_VERSION: string;
		WAYLAND_DISPLAY: string;
		npm_config_version_commit_hooks: string;
		GNOME_TERMINAL_SCREEN: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		INIT_CWD: string;
		npm_package_scripts_format: string;
		npm_package_scripts_preview: string;
		npm_lifecycle_script: string;
		npm_package_description: string;
		MOZ_GMP_PATH: string;
		GNOME_SETUP_DISPLAY: string;
		npm_config_version_tag_prefix: string;
		YARN_WRAP_OUTPUT: string;
		npm_package_devDependencies_svelte_check: string;
		XDG_SESSION_CLASS: string;
		TERM: string;
		npm_package_name: string;
		LESSOPEN: string;
		npm_package_type: string;
		USER: string;
		GNOME_TERMINAL_SERVICE: string;
		DISPLAY: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		npm_config_version_git_sign: string;
		npm_config_version_git_message: string;
		npm_package_dependencies_firebase: string;
		QT_IM_MODULE: string;
		npm_config_user_agent: string;
		npm_package_scripts_lint: string;
		npm_package_devDependencies__fontsource_fira_mono: string;
		npm_execpath: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_package_devDependencies_svelte: string;
		npm_package_scripts_test: string;
		XDG_RUNTIME_DIR: string;
		npm_package_devDependencies_svelte_preprocess: string;
		npm_config_strict_ssl: string;
		npm_package_devDependencies_sveltekit_adapter_firebase: string;
		npm_package_devDependencies_flowbite_svelte: string;
		DEBUGINFOD_URLS: string;
		npm_package_scripts_dev: string;
		XDG_DATA_DIRS: string;
		npm_package_scripts_check: string;
		PATH: string;
		GDMSESSION: string;
		npm_package_devDependencies__neoconfetti_svelte: string;
		npm_package_devDependencies__sveltejs_kit: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		npm_package_devDependencies__playwright_test: string;
		npm_package_license: string;
		MAIL: string;
		npm_config_registry: string;
		npm_config_ignore_optional: string;
		npm_package_devDependencies_postcss: string;
		npm_node_execpath: string;
		npm_config_init_version: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: string]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
