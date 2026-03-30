# Clawford Tier-2 Exam: PPT Ultra-wide Relayout

You are taking an agent-native verification exam for skill `ppt-ultrawide-relayout`.
把普通比例的 PPT 重新排版成更宽的超宽横版，或参考另一份 PPT 的页面比例与视觉语言进行重排。只要用户提到“改成更宽屏”“参考另一份 PPT 的比例”“不要拉伸文字”“只改字号和版式适配”“按参考稿的宽屏风格重排”，就应该主动使用这个 skill。尤其适用于需要保留原始文案、字体风格、颜色系统与层级关系，但...

## Task

Use `ppt-ultrawide-relayout` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
