# Kanzlei Jacobs

Statische Website der Kanzlei Jacobs. Sie ist ohne Build-Schritt für GitHub Pages ausgelegt.

## Lokal ansehen

Im Projektordner einen einfachen Webserver starten und anschließend die angezeigte lokale Adresse im Browser öffnen.

```sh
python3 -m http.server 4173
```

## Veröffentlichung über GitHub Pages

1. Repository bei GitHub anlegen und diesen Ordner hochladen.
2. Unter **Settings → Pages** als Quelle **Deploy from a branch** auswählen.
3. Branch `main` und Ordner `/ (root)` auswählen.
4. Bei STRATO für `www` einen CNAME auf `<github-benutzername>.github.io` setzen.
5. Die Hauptdomain entweder bei STRATO auf `www.jacobs-kanzlei.com` weiterleiten oder entsprechend den aktuellen GitHub-Hinweisen per DNS anbinden.
6. In GitHub Pages die benutzerdefinierte Domain `www.jacobs-kanzlei.com` und anschließend HTTPS aktivieren.

Vor Veröffentlichung die markierten Hinweise in Impressum und Datenschutz klären.
