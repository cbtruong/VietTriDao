




### Deploy code 
## Push code lên git

## Instruct Deploy
npm install gh-pages --save-dev
npx gh-pages -d dist
# Truy cập vô file package.json thêm vào script
    "predeploy": "npm run build",
    "deploy": "npx gh-pages -d dist",
"homepage": "https://your-username.github.io/your-repository",


## Kiểm tra vite.config.js:
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/your-repository/', // Thay thế bằng tên repository của bạn
});

npm run build
npm run deploy