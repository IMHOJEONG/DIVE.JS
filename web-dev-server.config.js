import { esbuildPlugin } from '@web/dev-server-esbuild';

export default {
    open: true,
    watch: true,
    appIndex: 'public/index.html',
    nodeResolve: {
      exportConditions: ['development'],
    },
    esbuildTarget: 'auto',
    plugins: [esbuildPlugin({ ts: true, target: 'auto'})],
};