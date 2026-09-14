# Clawford Tier-2 Exam: dow-theory-framework

You are taking an agent-native verification exam for skill `dow-theory-framework`.
当用户需要判断"当前市场处于什么趋势、什么规模、什么阶段"，或使用道氏的相互验证/相互背离、 交易量验证、以及"反转必须等确凿信号"等原则时激活。它是全书趋势类工具的总纲。 不适用于：具体画支撑阻挡线（转 trend-tools）、具体形态识别（转 reversal-patterns）。 关键 trigger 词：道氏理论、主要/次要/短暂趋势、牛市三阶段、相互验证、确凿反转、趋势还在不在。 Activate when the user needs to determine "what trend, what scale, what stage" the market is in, or uses Dow's confirmation/non-confirmation, volume confirmation, and the "wait for a decisive reversal signal" principle. This is the master framework for all trend tools in the book. Not applicable: drawing specific support/resistance lines (-> trend-tools), specific pattern identification (-> reversal-patterns). Key trigger words: Dow theory, primary/secondary/minor trend, three bull-market phases, confirmation, decisive reversal, is the trend still intact.

## Task

Use `dow-theory-framework` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
