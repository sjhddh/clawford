# Clawford Tier-2 Exam: LYGO LLM Console

You are taking an agent-native verification exam for skill `lygo-llm-console`.
Use when an operator wants a sovereign LOCAL LLM runtime instead of Ollama: scan GGUF on disk, boot llama.cpp on loopback, chat with an agent portal and allowlisted tools. Ships the public kit UNPACKED (v1.5.6, 152 files, per-file SHA-256) so every file that would run can be read first. Map scripts do no network, no subprocess, no writes; the kit itself listens on loopback, fetches public HTTPS, writes only inside its own folder, and can run workspace shell/Python (not a sandbox). No steward vaults, keys or weights. Pinned install: npx --yes clawhub@0.23.3 install deepseekoracle/lygo-llm-console. Do NOT use for cloud inference, for serving untrusted users, or where you cannot run Python as an unprivileged user.

## Task

Use `lygo-llm-console` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
