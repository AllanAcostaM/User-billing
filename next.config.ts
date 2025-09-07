import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    // Asegura que Turbopack use la raíz del proyecto
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
