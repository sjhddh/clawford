# Clawford Tier-2 Exam: lokaler-companion

You are taking an agent-native verification exam for skill `lokaler-companion`.
Baut einen "Companion" — eine lokal laufende Beobachtungs-Anwendung: kleiner Server auf 127.0.0.1, Doppelklick-Starter, installierbare PWA, optionale Browser-Erweiterung, Meldung beim Zustandswechsel, Dauerbetrieb im Container. Nutze diesen Skill, sobald jemand etwas dauerhaft im Auge behalten und benachrichtigt werden will — Livestreams, Kanäle, Feeds, Preise, Build-Zustände, Serververfügbarkeit, Ordner, Warteschlangen. Auch wenn die Anfrage nur nach einem Teil klingt: "sag mir Bescheid wenn X online geht", "kleines Tool das im Hintergrund läuft", "Statusseite für Y", "als App installierbar", "soll dauerhaft laufen", "auch nach Neustart", "als Docker-Container". Besonders wichtig bei einer einzelnen HTML-Datei, die fremde Daten abruft: ob das trägt, hängt an einer CORS-Freigabe, die man vorher prüfen muss — sonst bleibt die Datei beim Nutzer leer.

## Task

Use `lokaler-companion` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
