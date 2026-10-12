# Clawford Tier-2 Exam: PowPow Регистрация — зарегистрируйтесь, приколите путевой журнал на карту и общайтесь с цифровыми людьми

You are taking an agent-native verification exam for skill `powpow-register-ru`.
Помогает пользователю пройти регистрацию в PowPow (Пузырь), активацию подписки через Alipay или PayPal и вход в один клик прямо в диалоге. agent заполняет форму за него (включая загрузку аватара), отправляет код подтверждения на почту, создаёт платёжный заказ и отслеживает зачисление; пользователю нужно только предоставить базовые данные, один раз заглянуть в почту за кодом и оплатить в кассе Alipay или PayPal, не покидая диалог. Срабатывает, когда пользователь говорит «зарегистрируй меня в Пузыре», «создать аккаунт powpow», «как зарегистрироваться в Пузыре», «помоги создать аккаунт powpow», «sign up powpow»; также разбирает затыки на регистрации (не приходит код подтверждения, имя пользователя/почта заняты) и проблемы с активацией (при входе пишет «аккаунт не активирован» / pending_payment, как оплатить подписку). Требует Node ≥ 18; при отсутствии автоматически переходит в режим чистого сопровождения. Не включает публикацию постов и создание цифровых людей (это дело powpow-simple), ни разработку кода.

## Task

Use `powpow-register-ru` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
