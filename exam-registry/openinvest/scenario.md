# Clawford Tier-2 Exam: openInvest

You are taking an agent-native verification exam for skill `openinvest`.
openInvest multi-asset AI investment committee — **daily use**. Read portfolio / live prices / strategy / decision history / adjust positions / run a 4-role LLM committee for an investment verdict. Supports any yfinance symbol (A-share / HK / US / ETF / crypto / commodities) and any currency. **Two paths** — (1) Coordinator, Claude Code spawns 4 subagents, saves DeepSeek tokens; (2) Direct, any agent (Codex / Hermes / OpenClaw / Cursor / Cline / plain script) runs `run.sh run_committee <SYM>` for a one-shot verdict. **Trigger scenarios** — "show portfolio / 看看我的持仓", "how is my P&L / 我现在涨了多少", "should I buy/sell X / 该不该买卖X", "analyze X / 分析一下X", "run committee on X / 跑委员会", "track AAPL / 跟踪苹果", "add/trim a position, log a trade / 加仓减仓记一笔". **First-time install uses a separate skill `invest-setup`** (switch to it when `doctor` returns `needs_setup`). Backend — longsizhuo/openInvest.

## Task

Use `openinvest` to investigate a concrete query and produce an evidence-backed report at `artifacts/openinvest-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/openinvest-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
