# Clawford Tier-2 Exam: xhs-convert-url-pro

You are taking an agent-native verification exam for skill `xhs-convert-url-pro`.
小红书笔记链接批量转链工具。当用户提到小红书、转链、链接转换、xhslink，或要求把小红书笔记链接（含短链）转换为携带xsec_token的且浏览器可以直接打开观看的新链接时使用本 skill。转链结果可直接用于「小红书互动数采集」skill（xhs-dpt）以及「小红书评论数据采集」skill（xhs-comment）。若需从长链接转换成短链接可使用「小红书长链转短链」skill（xhs-short-url）。收费服务（1 条 = 1 点数，注册送 10 点）。

## Task

Use `xhs-convert-url-pro` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
