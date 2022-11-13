// plugins/pocketbase.js
import PocketBase from "pocketbase";

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      pocketbase: () => {
        const client = new PocketBase("http://127.0.0.1:8090");

        // load the store data from the request cookie string
        client.authStore.loadFromCookie(
          nuxtApp.ssrContext?.event?.req?.headers?.cookie || ""
        );

        // send back the default 'pb_auth' cookie to the client with the latest store state
        client.authStore.onChange(() => {
          if (nuxtApp.ssrContext?.event?.res) {
            nuxtApp.ssrContext.event.res.setHeader(
              "set-cookie",
              client.authStore.exportToCookie()
            );
          }
        });

        return client;
      },
    },
  };
});
