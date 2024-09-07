import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'

const themeConfig = resolveConfig(tailwindConfig)

const cn = (...inputs) => {
  return twMerge(clsx(inputs))
}

const post = (endpoint, data) => {
	// eslint-disable-next-line no-undef
	fetch(`https://${GetParentResourceName()}/${endpoint}`, {
		method: "POST",
		body: JSON.stringify(data ? data : {}),
	})

	.then((res) => res?.json())
	.then((result) => {
		console.log(result);
	}).catch(() => {});
};

export {
	cn,
	themeConfig,
	post
}
