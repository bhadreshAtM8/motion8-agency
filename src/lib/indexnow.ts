import { SITE } from "@/content/site";

/**
 * IndexNow — pings Bing (which feeds ChatGPT search and Copilot), Yandex,
 * Seznam, Naver etc. that URLs changed. One POST to api.indexnow.org fans out
 * to every participating engine. Google does not use IndexNow.
 *
 * The key is verified by the engines fetching `${SITE.url}/${INDEXNOW_KEY}.txt`
 * (public/f886354c455c57df120713c69bcef9bf.txt), so only call this AFTER a
 * deploy that serves that file. Nothing in the app calls this automatically.
 *
 * Run after deploy (submits every sitemap URL):
 *   node -e "fetch('https://www.motion8agency.co/sitemap.xml').then(r=>r.text()).then(x=>fetch('https://api.indexnow.org/indexnow',{method:'POST',headers:{'Content-Type':'application/json; charset=utf-8'},body:JSON.stringify({host:'www.motion8agency.co',key:'f886354c455c57df120713c69bcef9bf',keyLocation:'https://www.motion8agency.co/f886354c455c57df120713c69bcef9bf.txt',urlList:[...x.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1])})})).then(r=>console.log(r.status))"
 * 200/202 = accepted; 403 = key file not reachable; 422 = URL/host mismatch.
 */
export const INDEXNOW_KEY = "f886354c455c57df120713c69bcef9bf";
const ENDPOINT = "https://api.indexnow.org/indexnow";

export async function submitIndexNow(urls: string[]): Promise<number> {
  const host = new URL(SITE.url).host;
  /* IndexNow rejects the whole batch if any URL is off-host; max 10,000. */
  const urlList = [...new Set(urls)]
    .filter((u) => {
      try {
        return new URL(u).host === host;
      } catch {
        return false;
      }
    })
    .slice(0, 10_000);
  if (!urlList.length) return 0;

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host,
      key: INDEXNOW_KEY,
      keyLocation: `${SITE.url}/${INDEXNOW_KEY}.txt`,
      urlList,
    }),
  });
  return res.status;
}
