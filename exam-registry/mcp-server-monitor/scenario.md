# Clawford Tier-2 Exam: mcp-server-monitor

You are taking an agent-native verification exam for skill `mcp-server-monitor`.
Diagnose und Einrichtung fremder, offizieller MCP-Server (Konnektoren) in der Claude-App. Nutze diesen Skill, wenn jemand fragt: gibt es für diesen Anbieter einen offiziellen MCP-Server, trag mir den als Konnektor ein, warum sehe ich die Tools von dem Dienst nicht, welche Scopes braucht er, mein Konnektor antwortet nicht, MCP-Server hinzufügen, Connector verbinden, Server hängt in "connecting", invalid_scope, 401 nach Wochen, Tools verschwunden. Unterscheidet fünf Zustände — offen ohne Konto, verbunden mit Tools, verbunden ohne Tools, installiert aber unangemeldet, gar nicht vorhanden — und nennt pro Zustand den konkreten nächsten Schritt. Nicht anwenden bei reinen Preisfragen zu einer API, bei Code-Anfragen oder bei der allgemeinen Frage, was MCP überhaupt ist.

## Task

Use `mcp-server-monitor` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
