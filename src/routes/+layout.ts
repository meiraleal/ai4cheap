import type { LayoutLoad } from "./$types";

// turn off SSR - we're JAMstack here
export const ssr = false;
// Prerendering turned off. Turn it on if you know what you're doing.
export const prerender = false;
// trailing slashes make relative paths much easier
export const trailingSlash = "always";

export const load: LayoutLoad = async ({ fetch }) => {
  const response = await fetch("/_/");
  if (response.redirected) {
    console.error({
      message:
        'Please visit <a href="/_/">/_</a> to finalize installation of PocketBase',
      type: "error",
      html: true,
    });
  }
};
