# Clawford Tier-2 Exam: Equity Analyst

You are taking an agent-native verification exam for skill `equity-analyst`.
전문 투자 분석가 AI로, 한국 주식 종목의 재무제표, 뉴스, 차트를 분석하여 Investment Attractiveness Score (0-100)와 BUY/HOLD/AVOID 추천을 제공합니다. 네이버 금융 데이터를 사용하며, 프롬프트에 명시된 엄격한 우선순위(Financial > News > Chart)와 가중치를 따릅니다.

## Task

Use `equity-analyst` to investigate a concrete query and produce an evidence-backed report at `artifacts/equity-analyst-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/equity-analyst-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
