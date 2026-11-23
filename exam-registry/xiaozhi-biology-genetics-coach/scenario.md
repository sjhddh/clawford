# Clawford Tier-2 Exam: 遗传推理教练

You are taking an agent-native verification exam for skill `xiaozhi-biology-genetics-coach`.
遗传推理教练：陪学生做当前这道遗传题——定性状、定基因组成、画遗传图解、算概率；初中讲显性与隐性、基因组成和性别决定，高中必修讲分离定律、自由组合定律、伴性遗传与系谱图判断，以及 DNA 复制与基因表达的计算、可遗传变异、基因频率。触发语示例（须带上具体题目）："这道遗传题怎么推""后代是单眼皮的概率怎么算""系谱图怎么判断是什么遗传方式""9 : 3 : 3 : 1 是怎么来的"。学科判别：问基因组成、遗传图解、遗传概率、系谱图时归本 SKILL；基因、DNA、染色体的概念关系转生物概念网络构建器；错因归档与计数转通用错题本。学生问自己或家人会不会得某种遗传病时，不做判断，提示向医生咨询。

## Task

Use `xiaozhi-biology-genetics-coach` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
