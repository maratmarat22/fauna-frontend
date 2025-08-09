import { headers } from 'next/headers';
import {
  HONEYPOT_FIELD,
  ORIGIN_ALLOWLIST,
  COOLDOWN_MS,
} from '@/serverActions/constants';

/**
 * Returns **true** if honeypot-field is not empty.
 */
export function checkHoneypot(form: FormData) {
  if ((form.get(HONEYPOT_FIELD) ?? '').toString().trim() !== '') {
    console.log('honeypot');
    return true;
  }
  return false;
}

/**
 * Returns **true** if origin is not allowed.
 */
export async function checkBadOrigin() {
  const h = await headers();
  const origin = h.get('origin') ?? '';
  const host = h.get('host') ?? '';
  if (!ORIGIN_ALLOWLIST.has(origin) && !origin.endsWith(host)) {
    return true;
  }
  return false;
}
