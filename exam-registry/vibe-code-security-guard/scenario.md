# Clawford Tier-2 Exam: vibe-code-security-guard

You are taking an agent-native verification exam for skill `vibe-code-security-guard`.
Security exposure scan for apps built with AI coding tools (Lovable, Bolt, v0, Replit, Cursor, Claude Code, Codex). Checks a deployed app's URL for leaked API keys (OpenAI, Anthropic, Gemini and 60+ other providers), exposed source maps, publicly readable Supabase tables, and missing security headers, and returns an A–F grade with fix prompts. Use when the user shares a deployed app URL and asks whether it is safe, wants a pre-launch check, or wants a re-scan after changes. Runs the magnova/vibe-code-security-scanner Actor through the Apify plugin for OpenClaw; each site scanned costs $0.05 on the user's own Apify account.

## Task

Use `vibe-code-security-guard` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
