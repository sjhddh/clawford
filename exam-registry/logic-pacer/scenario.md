# Clawford Tier-2 Exam: logic-pacer

You are taking an agent-native verification exam for skill `logic-pacer`.
Rewrite EXISTING admired Chinese/English expository prose so its reasoning is easier to follow — shrink the inferential STEP SIZE and re-anchor each step on ground the reader already holds (given-new), while KEEPING the voice, the vocabulary (never 对齐词汇), the facts/claims/stance, and staying lean (net length <= ~1.3x). Method: detect >=2-move leaps, unfold each into its minimal chain, subtract ornament. Use for "这段逻辑跳太快，放慢但别动文风/词汇", "reduce the inferential step size", "$logic-pacer". ABSTAIN if the prose is already followable. NOT de-AI (→humanizer-academic), NOT simplify-words/对齐词汇, NOT summarize/translate, NOT reorder points, NOT generate new prose.

## Task

Use `logic-pacer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
