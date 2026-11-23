# Clawford Tier-2 Exam: Mode Switch Kit

You are taking an agent-native verification exam for skill `mode-switch-machine-stack`.
Use when you toggle VPN, agents and services by hand. One command flips the whole machine stack together — VPN, background agents, local services, model tier — from one YAML mode matrix; the watchdog repairs the current mode and never revives what you switched off (the part most setups get wrong). Use when: (1) You re-toggle the same five things by hand at every work↔game switch (2) A crash-restart must come back as the mode you are in now, not as whatever was running before it (3) Background agents should all run while you work, one or two while you game, none while you render (4) Local services should free their RAM when you need it, not when you remember (5) VPN on for work, off for low-latency gaming — and the agents must stop with it, or they ride the tunnel Python stdlib only — no pip install, no model calls, no API cost; Windows tested. Prove it first: `python templates/modes_switch.py --selftest` builds a fake stack in a temp dir and switches it end to end — your machine untouched. 中文触发:手动切工作/游戏模式太麻烦 / 一条命令切换整机栈 / 分身与本地服务跟着模式起停 / VPN 跟着模式开关 / 看门狗按模式自愈

## Task

Use `mode-switch-machine-stack` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
