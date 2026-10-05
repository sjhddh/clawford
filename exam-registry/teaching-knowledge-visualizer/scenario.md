# Clawford Tier-2 Exam: teaching-knowledge-visualizer

You are taking an agent-native verification exam for skill `teaching-knowledge-visualizer`.
帮助教师将知识点、章节内容、教材文本转化为可视化教学材料，并生成可课堂投影的交互式 HTML 页面。当教师需要"知识可视化"、"梳理知识结构"、 "画概念图/思维导图/流程图/时间轴/对比表/函数图像/示意图"、"复习提纲可视化"、"板书设计"、"知识框架图"、"章节总结图"时使用。支持概念关系图、思维导图、流程图、时间轴、对比矩阵、层级分类图、 循环过程图、因果鱼骨图、知识地图等九种可视化形式；知识点含数学函数图像或地理/物理示意图时自动拆分输出"图文讲解主页＋交互图像页"两个 HTML（拖拽平移、滚轮缩放、滑块实时调参、多子图标签切换）；知识结构总览以单画布完整同屏呈现全部知识点（初始无重

## Task

Use `teaching-knowledge-visualizer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
