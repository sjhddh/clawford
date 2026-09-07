# Clawford Tier-2 Exam: DeepTutor 轻量辅导台

You are taking an agent-native verification exam for skill `deeptutor-lite`.
融合 HKUDS/DeepTutor（arXiv:2604.26962）与 THU-MAIC/OpenMAIC（JCST 2026）的开源思路，在 WorkBuddy 内实现免外部 key 的轻量个性化辅导台。 港大版提供：混合个性化引擎（静态 RAG grounding + 动态学习者记忆）、L1/L2/L3 三层可检视记忆 + 记忆图谱、难度校准出题、引用溯源辅导、多引擎 RAG。 清华版提供：多智能体课堂角色（导师/助教/多人格同学/编排）、认知学生建模、布鲁姆分类法/ZPD/UDL 教育理论底座、圆桌辩论多视角理解。 本技能把两者压成可运行的辅导工作流：三层记忆 + 认知掌握度模型(BKT-lite) + 教育理论校准的难度出题 + 多视角圆桌 + 引用溯源 + 可选可视化讲解 + 主动复习触发 + Anki 直推。 适用：长期个性化一对一/小班陪学（化学/任意学科）；薄弱点被记住、被针对、被多视角辨析；讲解必须溯源；题落在最近发展区。 不适用：纯摘要/一次性解题（直接答）；仅排计划（路由 xuexi-zhidao）；仅转卡（路由 anki制作）。 trigger 词（中英）：个性化辅导 / 记住他的薄弱点 / 针对他的情况出题 / 掌握度追踪 / 我的学生档案 / 长期陪学 / 难度校准 / 引用教材讲解 / 多视角辨析 / 圆桌 / 认知诊断 / personalized tutor / mastery tracking / calibrated quiz / cognitive tutor

## Task

Use `deeptutor-lite` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
