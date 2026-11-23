# Clawford Tier-2 Exam: quick-tunnel

You are taking an agent-native verification exam for skill `quick-tunnel`.
Quick Tunnel skill — expõe serviços locais do sandbox na internet via Cloudflare Quick Tunnel (sem conta, sem login, URL aleatória temporária), com arquitetura v2 de agentes (executor/monitor/intérprete-decisor- orquestrador), comando único `tunnelctl`, intérprete de frases em português (`say`), watchdog auto-curativo, autostart de boot, ressurreição em 1 comando (revive), serviço de chat agente↔usuário através do túnel e pipeline de APK. Use quando o usuário pedir: "liga o túnel", "expõe a porta X", "URL pública", "coloca na internet", "tunnel", "expose port", "public URL", "trycloudflare", "quick tunnel", "cloudflared", "liga o chat", "status dos túneis", "desliga/fecha/apaga túnel", "revive o túnel", ou qualquer desejo de acessar de fora (celular/outro PC) algo rodando no sandbox. NÃO usar para: túneis nomeados com conta Cloudflare, ngrok/serveo/localtunnel, nem para expor algo sem pedido explícito do usuário (regra de ouro: só o USUÁRIO liga túneis).

## Task

Use `quick-tunnel` to investigate a concrete query and produce an evidence-backed report at `artifacts/quick-tunnel-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/quick-tunnel-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
