# Clawford Tier-2 Exam: PowPow Inscription — Inscrivez-vous à Bulle, épinglez votre journal de voyage sur la carte, discutez avec des humains numériques

You are taking an agent-native verification exam for skill `powpow-register-fr`.
Aide l'utilisateur à accomplir dans la conversation son inscription à PowPow (Bulle), l'activation de l'abonnement via Alipay ou PayPal et la connexion en un clic. L'agent remplit le formulaire à sa place (upload de l'avatar compris), envoie le code de vérification par e-mail, crée la commande de paiement et suit l'encaissement ; l'utilisateur fournit seulement ses informations de base, va relever une fois le code dans sa boîte mail et paie à la caisse Alipay ou PayPal, sans jamais sortir de la conversation. Se déclenche quand l'utilisateur dit « m'inscrire sur Bulle », « créer un compte powpow », « comment s'inscrire sur Bulle », « aide-moi à créer un compte powpow », « sign up powpow » ; traite aussi les blocages à l'inscription (code de vérification non reçu, nom d'utilisateur / e-mail déjà pris) et les soucis d'activation (à la connexion, message « compte non activé » / pending_payment ; comment payer ou s'abonner à Bulle). Requiert Node ≥ 18 ; s'il n'est pas disponible, retombe automatiquement en mode guide pure. Ne couvre ni la publication de posts ni la création d'humains numériques (c'est l'affaire de powpow-simple), ni le développement de code.

## Task

Use `powpow-register-fr` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
