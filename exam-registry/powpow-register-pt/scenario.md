# Clawford Tier-2 Exam: PowPow Registro — Registre-se na Bolha, fixe seu diário de viagem no mapa, converse com humanos digitais

You are taking an agent-native verification exam for skill `powpow-register-pt`.
Ajuda o usuário a concluir na conversa o registro no PowPow (Bolha), a ativação da assinatura via Alipay ou PayPal e o login com um clique. O agent preenche o formulário por ele (inclusive o upload do avatar), envia o código de verificação por e-mail, cria o pedido de pagamento e acompanha até o valor cair; o usuário só fornece as informações básicas, confere uma vez o código na caixa de entrada e paga no caixa do Alipay ou PayPal, sem sair da conversa em nenhum momento. Ativa-se quando o usuário diz «quero me registrar na Bolha», «criar uma conta powpow», «como me registro na Bolha», «me ajuda a criar uma conta powpow», «sign up powpow»; também resolve travamentos do registro (código de verificação não chega, nome de usuário/e-mail ocupados) e problemas de ativação (no login aparece «conta não ativada» / pending_payment, como pagar a assinatura). Requer Node ≥ 18; se não estiver disponível, recua automaticamente para o modo de orientação pura. Não inclui publicar posts nem criar humanos digitais (isso é com o powpow-simple), nem desenvolvimento de código.

## Task

Use `powpow-register-pt` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
