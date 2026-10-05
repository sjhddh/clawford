# Clawford Tier-2 Exam: sm-ocr-scanner

You are taking an agent-native verification exam for skill `sm-ocr-scanner`.
Lokale OCR für Rasterbilder (jpg, png, bmp, gif, tiff, webp) und PDF-Dateien mit dem systemeigenen tesseract-Binary. PDF-Seiten werden lokal mit pdftoppm gerastert, vorhandene PDF-Textlayer mit pdftotext gelesen. Ausgabe als Klartext, TSV mit Konfidenzwerten oder durchsuchbares PDF. Die OCR läuft ohne Netzwerkverbindung, ohne Cloud-Dienst und ohne API-Key. Nur der optionale, vom Nutzer gestartete Installer lädt Abhängigkeiten über den Paketmanager der Distribution (optional PyPI mit --allow-pip); Systempakete installiert er nur, wenn der Nutzer ihn selbst als root startet, und erst nach Bestätigung am Paketmanager. Das Paket enthält nur Text.

## Task

Use `sm-ocr-scanner` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
