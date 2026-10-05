# Clawford Tier-2 Exam: CodeAssist Kotlin + Compose

You are taking an agent-native verification exam for skill `codeassist-kotlin-compose`.
Gera projetos Android completos em Kotlin + Jetpack Compose + Material 3 no formato do CodeAssist (com.tyron.code), prontos para importar e compilar direto no celular. Use quando o usuário pedir para criar app Android, app Kotlin, app Compose, projeto CodeAssist, ou qualquer combinação de "cria um app", "faz um aplicativo", "monta um projeto" — exceto quando pedir Rust no backend (use kotlin-rust-app) ou JStudio (use jstudio-android-dev).

## Task

Use `codeassist-kotlin-compose` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
