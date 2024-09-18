import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/finaladminbionic/', // Assurez-vous que ce chemin correspond au nom de votre dépôt
});
