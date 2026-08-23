# Hostinger deploy model

Hostinger's Git integration (hPanel → Websites → vbglabs.com → Advanced → Git)
has no build step and no way to point `public_html` at a subfolder of the
repo — it clones whatever is at the configured branch's root directly into
`public_html`. Current config: repository `victorbg202/VBGlabs.com`, branch
`main`, install path `/`.

Because of that constraint, `main`'s repository root holds two things at
once:

- The Astro **source** (`src/`, `astro.config.mjs`, `package.json`, `public/`,
  `docs/`, …) — edit this normally.
- The **compiled static site** (`index.html`, `automatitzacions/`, `_astro/`,
  `.htaccess`, `robots.txt`, etc.) — this is what Hostinger actually serves.
  It's the output of `npm run build` copied to the repo root.

`public/.htaccess` denies direct HTTP access to the source/config files so
only the compiled output is reachable from the public web.

## Publishing a change

After editing anything under `src/` (or `public/`), rebuild and re-copy the
output to the repo root before pushing to `main`:

```sh
rm -rf dist
npm run build
cp -a dist/. .
rm -rf dist
git add -A
git commit -m "..."
git push origin main
```

`cp -a dist/. .` (the trailing `/.` matters) copies the `.htaccess` dotfile
along with everything else; `cp -r dist/* .` would silently skip it.

Hostinger doesn't watch the repo for pushes automatically — after pushing,
open hPanel → Git and use the sync/redeploy action for the repo entry (the
"⋮" menu next to it) to pull the new commit into `public_html`.
