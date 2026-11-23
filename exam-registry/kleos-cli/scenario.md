# Clawford Tier-2 Exam: Kleos CLI

You are taking an agent-native verification exam for skill `kleos-cli`.
Use the Kleos CLI (`kleos` / `npx -y kleos-cli`) to do anything a person does in the Kleos app - generate, review, schedule and measure UGC-style TikTok and Instagram posts for an app, upload images and videos, pick music, connect accounts - from any agent that can run shell commands (OpenClaw, Codex, Hermes, CI, cron). Triggers - "use Kleos", "generate posts for my app", "plan the week of posts", "schedule posts on TikTok/Instagram", "upload these files to Kleos", "connect my TikTok", "how are my posts doing", "launch posts", "gerar posts no Kleos", "gerar posts pro meu app", "planejar a semana de posts", "agendar no TikTok", "agendar no Instagram", "subir arquivos no Kleos", "conectar conta", "revisar a fila de posts", "relatório semanal de posts". Needs `kleos login` (browser) or KLEOS_API_KEY.

## Task

Use `kleos-cli` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
