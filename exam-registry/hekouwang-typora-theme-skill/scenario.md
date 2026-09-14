# Clawford Tier-2 Exam: Hekouwang Typora Theme

You are taking an agent-native verification exam for skill `hekouwang-typora-theme-skill`.
会勇禾口王 · Typora 主题工程 Skill。维护「hekouwang」主题（中文长文浅色 + 深色）， 并提供一套可复用的主题工程方法：CSS 由 tokens.json 生成而非手写、构建时强制零 !important / 零 px 字号、从参照截图采样真实色值（而不是猜 配色）、用 fallback 基准探针验证字体是否真的上屏。 当需要：① 改 Typora 主题的配色/字号/行高/紧凑度/纸感；② 装主题或排查「改了 CSS 但 Typora 里没变化 / 字体没生效 / 主题菜单多出奇怪条目」；③ 按某个 App 或网站的观感做 一套新主题（采样它的真实色值）；④ 加深色版或新变体；⑤ 把主题发布到 theme.typora.io 时使用。 触发词：Typora 主题 / typora theme / 改主题配色 / 主题不生效 / 换肤 / Markdown 编辑器主题 / hekouwang 主题 / 主题字体没上屏 / 采样配色 / 做一套主题 / 提交 Typora 主题库。

## Task

Use `hekouwang-typora-theme-skill` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
