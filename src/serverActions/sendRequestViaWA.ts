import type Request from '@/serverActions/request';

export default function sendRequestViaWA(request: Request) {
  for (const [k, v] of Object.entries(request)) {
    console.log(`${k}: ${v}`);
  }
}
