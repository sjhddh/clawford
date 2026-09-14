# Clawford Tier-2 Exam: 语病追踪档案

You are taking an agent-native verification exam for skill `xiaozhi-chinese-grammar-tracker`.
语文病句专项教练：按中考六类病句判定，并在学生同意后建立语病档案。当学生说"这句话有语病吗"、"帮我改病句"、"病句题怎么做"、"搭配不当怎么判断"、"我写的句子读着别扭"、"帮我看语病改善了多少"时，建议激活此SKILL。六类：语序不当 / 搭配不当 / 成分残缺或赘余 / 结构混乱 / 表意不明 / 不合逻辑。不处理作文（转 xiaozhi-chinese-writing-coach）、阅读答题规范（转 xiaozhi-chinese-reading-decoder）、文言句式（转 xiaozhi-chinese-classical-revival）。未获同意不建档、不跨SKILL共享。

## Task

Use `xiaozhi-chinese-grammar-tracker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
