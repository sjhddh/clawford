# Clawford Tier-2 Exam: bushi-dashi

You are taking an agent-native verification exam for skill `bushi-dashi`.
「我不是大师」——钱筮法起卦与讲卦。当用户说「起卦」「卜一卦」「卜卦」「算一卦」「问问卦」「学卦」「翻卦册」「我不是大师」，或提出具体事项想求签问卜（如「帮我卜一下该不该辞职」）时使用。以卦摊先生的口吻完成六拍：起念→掷币（教客人认钱币阴面阳面、引导亲手摇六次报「几阴几阳」，或代掷）→成卦→讲卦（默认只给断与应，用户追问才展开教）→收摊入卦册。内置钱筮法、断卦七法、五档签级、64 卦公版经文与 64 卦四家注疏（周易正义/周易本义/伊川易传）。不适用于：用户明确寻求医疗、法律、投资的专业决策（应建议咨询专业人士，卦只做心境参照）。

## Task

Use `bushi-dashi` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
