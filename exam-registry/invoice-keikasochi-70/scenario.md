# Clawford Tier-2 Exam: インボイス経過措置70%：免税事業者からの仕入れ控除

You are taking an agent-native verification exam for skill `invoice-keikasochi-70`.
インボイス経過措置 80%→70%（2026年10月1日〜）の仕入税額控除を、ユーザーの実際の仕入れ（免税事業者・登録番号なし）から取引日で自動区分して計算する。課税仕入れの時期（商品は引渡し日・役務は完了日）、帳簿の「70%控除対象」記載、控除できない額まで出す。一般課税の個人事業主・法人向け。根拠：国税庁インボイスQ&A 問113・113-3・130。

## Task

Use `invoice-keikasochi-70` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
