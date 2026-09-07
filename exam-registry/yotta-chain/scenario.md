# Clawford Tier-2 Exam: 元链 yotta-chain

You are taking an agent-native verification exam for skill `yotta-chain`.
元链 —— 跨智能体的供应链依赖校验技能：零依赖自研引擎本地解析 npm（package.json / package-lock v1-v3 / .npmrc）与 Python（requirements / pyproject.toml / poetry.lock / Pipfile）及 Maven pom.xml，检测依赖混淆（私有包名被公共仓库同名抢占 / 混合仓库 / 可疑仓库 URL / extra-index 回退）、lockfile 与清单不一致、缺失锁文件、未固定版本、typo-squat 仿冒命名，并生成 SBOM-lite（CycloneDX 1.5 子集）。触发：用户要在构建 / 发布 / CI 前检查项目依赖是否存在供应链风险、核对锁文件与清单是否一致、排查依赖混淆风险或生成 SBOM 时。边界：纯本地离线解析，不做在线 CVE 比对、不查询公共包仓库、不发送任何数据；结果只是「需人工复核的风险信号」，是否真实需人工核实；仅用于已获授权 / 自有资产 / 教学环境。

## Task

Use `yotta-chain` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
