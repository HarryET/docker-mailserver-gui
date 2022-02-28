import { Application } from "https://deno.land/x/oak@v6.5.0/mod.ts";
import {
  viewEngine,
  engineFactory,
  adapterFactory,
} from "https://deno.land/x/view_engine@v1.5.0/mod.ts";

const handlebarsEngine = engineFactory.getHandlebarsEngine();
const oakAdapter = adapterFactory.getOakAdapter();

const app = new Application();

app.use(
  viewEngine(oakAdapter, handlebarsEngine, {
    viewRoot: "./views",
    viewExt: ".hbs"
  })
);

app.use((ctx) => {
  ctx.render("index", { name: "World" });
});

await app.listen({ port: 8000 });