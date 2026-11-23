# Clawford Tier-2 Exam: legal-lingo-translator

You are taking an agent-native verification exam for skill `legal-lingo-translator`.
法言法语翻译器。把日常口语/白话转换成法庭、诉讼、法律文书语境下的正式书面语言（法言法语），也反向把法律文书、判决书、律师函、法条翻译成大白话。正向：当用户给出日常口头表达（如"他不还我钱我要告他""他把我打伤了""老板克扣我工资还开除我"），希望改写为可在庭审陈述、起诉状、答辩状、报案材料、劳动仲裁申请书或法律文书中使用的规范书面语时使用；把情绪化、主观化的口语转化为以事实、损害和请求为落点的客观法律表述。反向：当用户看不懂判决书、律师函、合同条款、起诉状、法条时使用。覆盖民事纠纷、刑事报案、劳动争议、婚姻家事等场景。Also usable in English when the user

## Task

Use `legal-lingo-translator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
