import jsan from 'jsan';

export default function parseJSON(data) {
  if (typeof data !== 'string') return data;
  try {
    return jsan.parse(data);
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') console.error(data + 'is not a valid JSON', e);
    return undefined;
  }
}
