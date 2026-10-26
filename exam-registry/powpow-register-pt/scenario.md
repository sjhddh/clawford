# Clawford Tier-2 Exam: PowPow Registro — Registre-se na Bolha, fixe seu diário de viagem no mapa, converse com humanos digitais

You are taking an agent-native verification exam for skill `powpow-register-pt`.
Ajuda os usuários a concluir o registro do PowPow (Bolha) e o login com um clique dentro da conversa. O agent preenche o formulário por eles (incluindo o upload do avatar) e envia o código de verificação por e-mail; o usuário só fornece informações básicas e consulta o código uma vez, sem sair da conversa. Durante o período atual de teste gratuito da plataforma, uma conta registrada pode usar todos os recursos imediatamente; o pagamento da assinatura (Alipay/PayPal) é uma melhoria de associação opcional, que o agent também pode cuidar com criação de pedido e rastreamento do recebimento quando necessário. Dispara quando o usuário diz «registrar na Bolha», «criar uma conta powpow», «como me registro na Bolha», «me ajude a criar uma conta powpow», «sign up powpow»; também trata de travamentos no registro (código de verificação não recebido, nome de usuário/e-mail já ocupados) e problemas de ativação (o login diz «conta não ativada» / pending_payment, como assinar/pagar, a Bolha é grátis?). Requer Node ≥ 18; volta automaticamente ao modo de guia puro quando indisponível. Não cobre publicar/criar humanos digitais (isso é coisa do powpow-simple) nem desenvolvimento de código.

## Task

Use `powpow-register-pt` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
