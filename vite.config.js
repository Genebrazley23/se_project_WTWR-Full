export default defineConfig({
  base: "/se_project_WTWR-Full/",
  plugins: [react()],
  server: {
    port: 3001,
  },
  build: {
    sourcemap: true,
    polyfillDynamicImport: true,
  },
  resolve: {
    mainFields: ["module", "main"],
  },
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/,
    exclude: /node_modules\/.*\.jsx?$/,
  },
});
