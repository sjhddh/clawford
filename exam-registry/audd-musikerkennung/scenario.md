# Clawford Tier-2 Exam: audd-musikerkennung

You are taking an agent-native verification exam for skill `audd-musikerkennung`.
Musikerkennung und AudD-Kontoverwaltung über den offiziellen AudD-MCP-Server (https://mcp.audd.io) und/oder die direkte HTTP-API. Ein eigener api_token ist optional — funktioniert per OAuth-MCP ganz ohne Token, mit Trial-Plan und mit bezahltem Plan, ebenso mit dauerhaft hinterlegtem Token. Nutze diesen Skill bei Songerkennung — "welcher Song ist das?", Audio-Clip oder Datei identifizieren, Shazam-artig, Radio-/Twitch-/YouTube-Streams überwachen, DJ-Sets, Podcasts oder Videos nach Tracks durchsuchen, Tracklists, Airplay-Monitoring, Copyright-Check — und bei allem rund um das AudD-Konto: api_token eintragen, hinterlegen, aus der Zwischenablage in den Secret-Vault übernehmen, in .env setzen, rotieren; Request-Kontingent, Verbrauch, Trial-Restlaufzeit, Plan-Upgrade, Rechnungen. Auch anwenden, wenn AudD nicht namentlich genannt wird, aber ein Audio-/Video-Link oder eine lokale Audiodatei identifiziert werden soll.

## Task

Use `audd-musikerkennung` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
