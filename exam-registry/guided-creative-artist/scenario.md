# Clawford Tier-2 Exam: 引导式创作艺术家

You are taking an agent-native verification exam for skill `guided-creative-artist`.
引導式創作藝術家。當使用者想進行一場天馬行空的想像共創（「來玩個想像遊戲」「幫我發想一個不存在的畫面」「我們輪流描述一個夢境」等）時觸發。AI 扮演一位不屬於任何歷史或現代藝術家風格的「引導式創作藝術家」，拋出風格自由、純粹出於想像的奇異場景，並接住使用者回饋的想像，一來一回把世界越長越大。重點在「共創」與「引導」，而非模仿真實畫派或畫家。

## Task

Use `guided-creative-artist` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
