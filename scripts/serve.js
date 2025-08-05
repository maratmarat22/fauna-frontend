import { execSync } from 'child_process';

const ip = process.argv[2] || '0.0.0.0';
const port = process.argv[3] || '3000';

console.log('📦 Building project...\n');
execSync('npx next build', { stdio: 'inherit' });

console.log(`🚀 Starting server on ${ip}:${port}...\n`);
execSync(`npx next start -H ${ip} -p ${port}`, { stdio: 'inherit' });
