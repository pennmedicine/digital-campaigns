import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    build: {
        format: 'directory',
        assets: '-',
    },
    vite: {
        build: {
            rollupOptions: {
                output: {
                    assetFileNames: `-/media/Files/digitalcampaigns/assets/main[extname]`
                }
            }
        }
    }
});
