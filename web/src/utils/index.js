import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { isEnvBrowser } from './misc';

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'

const themeConfig = resolveConfig(tailwindConfig)

export const cn = (...inputs) => {
  return twMerge(clsx(inputs))
}

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

// interface DebugEvent<T = unknown> {
//   action: string;
//   data: T;
// }

/**
 * Emulates dispatching an event using SendNuiMessage.
 * This is used when developing in browser.
 *
 * @param events - The event you want to cover
 * @param timer - How long until it should trigger (ms)
 */
export const debugData = (events, timer = 1000) => {
  if (process.env.NODE_ENV === 'development' && isEnvBrowser()) {
    for (const event of events) {
      setTimeout(() => {
        window.dispatchEvent(
          new MessageEvent('message', {
            data: {
              action: event.action,
              data: event.data,
            },
          })
        );
      }, timer);
    }
  }
};
