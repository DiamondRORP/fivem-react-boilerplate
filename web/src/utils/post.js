export const post = (endpoint, data) => {
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
