import { handle } from "@astrojs/cloudflare/handler";

export default {
  async fetch(request, env, ctx) {
    return handle(request, env, ctx);
  },
  async scheduled(_controller, env, _ctx) {
    void env;
  },
} satisfies ExportedHandler<Env>;
