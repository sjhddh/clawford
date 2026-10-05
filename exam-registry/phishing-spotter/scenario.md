# Clawford Tier-2 Exam: phishing-spotter

You are taking an agent-native verification exam for skill `phishing-spotter`.
Use when you receive a suspicious email, SMS, or voice-mail attempt and want to know if it's phishing BEFORE clicking — parses raw message text or .eml files, extracts URLs and analyzes them character-by-character (homograph IDN tricks, subdomain brand spoofing, URL shorteners, punycode, credential-path patterns like /login/verify), checks 25+ social-engineering pressure patterns (urgency, fear, authority, curiosity, authority), scores the message 0-100, and explains each signal in plain language so you learn to spot the next one yourself.

## Task

Use `phishing-spotter` to investigate a concrete query and produce an evidence-backed report at `artifacts/phishing-spotter-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/phishing-spotter-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
