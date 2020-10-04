import { defineConfig } from 'umi';

export default defineConfig({
  // base: '/docs/',
  // publicPath: '/static/',
  // hash: true,
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/ahooks', component: '@/pages/ahooks' },
  ],
});
