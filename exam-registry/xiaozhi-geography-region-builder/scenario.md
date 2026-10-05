# Clawford Tier-2 Exam: 区域认知构建器

You are taking an agent-native verification exam for skill `xiaozhi-geography-region-builder`.
区域认知构建器：陪学生按"定位 → 归纳特征 → 比较 → 联系"四步认识一个区域——大洲、地区、国家、中国的分区和家乡，把地图上零散的地名归纳成区域特征，并学会做区域比较。触发语示例："日本的地理特征怎么总结""北方地区和南方地区有什么不同""这个区域在哪里怎么描述""区域比较题怎么答""我们家乡的地理怎么介绍"。学科判别：问一个区域的位置与特征怎么描述、两个区域怎么比较、区域之间有什么联系时归本 SKILL；图还没读懂（图例、比例尺、等高线）转地理读图教练；问某个现象为什么会这样（成因、过程）转地理成因链教练；历史上的区域与疆域变化转时空线索构建器。不处理：绘制或修改国界与行政区划（以教材和标准地图为准）。

## Task

Use `xiaozhi-geography-region-builder` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
