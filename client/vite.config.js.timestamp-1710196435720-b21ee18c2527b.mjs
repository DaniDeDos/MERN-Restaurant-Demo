// vite.config.js
import { defineConfig } from "file:///media/hanzo/Datos/el_Templo/dev/MERN/MERN-Blog-Demo/client/.yarn/__virtual__/vite-virtual-07ba844d48/9/home/hanzo/.yarn/berry/cache/vite-npm-4.5.2-e430b2c117-10c0.zip/node_modules/vite/dist/node/index.js";
import react from "file:///media/hanzo/Datos/el_Templo/dev/MERN/MERN-Blog-Demo/client/.yarn/__virtual__/@vitejs-plugin-react-virtual-8332807d9c/9/home/hanzo/.yarn/berry/cache/@vitejs-plugin-react-npm-4.2.1-8b9705c544-10c0.zip/node_modules/@vitejs/plugin-react/dist/index.mjs";
import copy from "file:///home/hanzo/.yarn/berry/cache/vite-plugin-copy-npm-0.1.6-ae92e47a33-10c0.zip/node_modules/vite-plugin-copy/dist/vite-plugin-copy.js";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    copy({
      targets: [
        { src: "node_modules/@flaticon/flaticon-uicons/css/*", dest: "public/css" }
      ]
    })
  ],
  server: {
    fs: {
      // Permite el acceso a los archivos dentro de node_modules
      allow: ["..", "/media/hanzo/Datos/el_Templo/dev/MERN/MERN-Blog-Demo/client/node_modules"]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvbWVkaWEvaGFuem8vRGF0b3MvZWxfVGVtcGxvL2Rldi9NRVJOL01FUk4tQmxvZy1EZW1vL2NsaWVudFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL21lZGlhL2hhbnpvL0RhdG9zL2VsX1RlbXBsby9kZXYvTUVSTi9NRVJOLUJsb2ctRGVtby9jbGllbnQvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL21lZGlhL2hhbnpvL0RhdG9zL2VsX1RlbXBsby9kZXYvTUVSTi9NRVJOLUJsb2ctRGVtby9jbGllbnQvdml0ZS5jb25maWcuanNcIjsvLyB2aXRlLmNvbmZpZy5qc1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcbmltcG9ydCBjb3B5IGZyb20gJ3ZpdGUtcGx1Z2luLWNvcHknO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBjb3B5KHtcbiAgICAgIHRhcmdldHM6IFtcbiAgICAgICAgeyBzcmM6ICdub2RlX21vZHVsZXMvQGZsYXRpY29uL2ZsYXRpY29uLXVpY29ucy9jc3MvKicsIGRlc3Q6ICdwdWJsaWMvY3NzJyB9XG4gICAgICBdXG4gICAgfSlcbiBdLFxuIHNlcnZlcjoge1xuICAgIGZzOiB7XG4gICAgICAvLyBQZXJtaXRlIGVsIGFjY2VzbyBhIGxvcyBhcmNoaXZvcyBkZW50cm8gZGUgbm9kZV9tb2R1bGVzXG4gICAgICBhbGxvdzogWycuLicsICcvbWVkaWEvaGFuem8vRGF0b3MvZWxfVGVtcGxvL2Rldi9NRVJOL01FUk4tQmxvZy1EZW1vL2NsaWVudC9ub2RlX21vZHVsZXMnXVxuICAgIH1cbiB9XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBR2pCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzNCLFNBQVM7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLEtBQUs7QUFBQSxNQUNILFNBQVM7QUFBQSxRQUNQLEVBQUUsS0FBSyxnREFBZ0QsTUFBTSxhQUFhO0FBQUEsTUFDNUU7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNKO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTCxJQUFJO0FBQUE7QUFBQSxNQUVGLE9BQU8sQ0FBQyxNQUFNLDBFQUEwRTtBQUFBLElBQzFGO0FBQUEsRUFDSDtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
