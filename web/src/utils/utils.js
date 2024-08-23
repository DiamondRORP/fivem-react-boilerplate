import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

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
	post
}
