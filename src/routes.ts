import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  index("./routes/product-page.jsx"),
  route("privacy", "./routes/privacy.jsx"),
  route("*", "./routes/catch-all.jsx"),
] satisfies RouteConfig;
