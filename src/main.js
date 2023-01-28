import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/main.pcss";
import * as Sentry from "@sentry/vue";
import { BrowserTracing } from "@sentry/tracing";

const app = createApp(App);

Sentry.init({
    app,
    dsn: "https://01f9258923bf43459d8bd45a1f181055@o4504544152256512.ingest.sentry.io/4504544165298176",
    logErrors: true,
    release: __SENTRY_RELEASE__,
    environment: import.meta.env.MODE,
    integrations: [
        new BrowserTracing({
            routingInstrumentation: Sentry.vueRouterInstrumentation(router),
            tracePropagationTargets: ["localhost", "my-site-url.com", /^\//],
        }),
    ],
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
});

app.use(router).mount("#app");

const user = {
    id: "123",
    email: "example@gmail.com",
};

Sentry.setUser(user);
// Sentry.configureScope((scope) => scope.setUser(null));