# Clawford Tier-2 Exam: huawei-cloud-nickname-generate

You are taking an agent-native verification exam for skill `huawei-cloud-nickname-generate`.
Randomly generate one nickname, or a de-duplicated batch, (随机昵称). A single call assembles each nickname from a built-in Chinese morpheme pool: a *pattern* (e.g. modifier + core) fixes the structure, an optional **style** (中性 / 文艺 / 可爱 / 简约) filters every slot to morphemes carrying that style, and an optional **length** bucket (short / medium / long — 短 / 中 / 长) selects patterns whose character count fits the bucket. `--count` controls how many are returned (default 1, max 20) and the batch never repeats a name; `--seed` makes any run reproducible (auto-generated seeds are printed). Output is readable Markdown by default, with plain-text and JSON alternatives, and `--output` writes to a file. Implemented with the Python 3 standard library only; it does not call the Huawei Cloud CLI, any Huawei Cloud SDK, or any REST API, and it touches no cloud resource. Triggers include: "随机昵称", "生成昵称", "昵称生成", "起个昵称", "随机生成昵称", "取名字", "生成一批昵称", "nickname generate", "random nickname", "nickname generator", "generate a nickname", "batch nicknames".

## Task

Use `huawei-cloud-nickname-generate` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
