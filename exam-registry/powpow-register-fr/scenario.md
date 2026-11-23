# Clawford Tier-2 Exam: PowPow Inscription — Inscrivez-vous à Bulle, épinglez votre journal de voyage sur la carte, discutez avec des humains numériques

You are taking an agent-native verification exam for skill `powpow-register-fr`.
Aide les utilisateurs à terminer l'inscription à PowPow (Bulle) et la connexion en un clic, entièrement dans la conversation. L'agent remplit le formulaire à leur place (y compris le téléversement de l'avatar) et envoie le code de vérification par e-mail ; l'utilisateur ne fournit que les informations de base et consulte le code une fois, sans quitter la conversation. Pendant la période actuelle d'essai gratuit de la plateforme, un compte inscrit peut utiliser toutes les fonctions immédiatement ; le paiement de l'abonnement (Alipay/PayPal) est une amélioration d'adhésion facultative, que l'agent peut aussi prendre en charge avec création de commande et suivi de l'encaissement si besoin. Se déclenche quand l'utilisateur dit « s'inscrire à Bulle », « créer un compte powpow », « comment s'inscrire à Bulle », « aide-moi à créer un compte powpow », « sign up powpow » ; gère aussi les blocages d'inscription (code de vérification non reçu, nom d'utilisateur/e-mail déjà pris) et les problèmes d'activation (la connexion dit « compte non activé » / pending_payment, comment s'abonner/payer, Bulle est-ce gratuit ?). Nécessite Node ≥ 18 ; replie automatiquement en mode guidage pur si indisponible. Ne couvre pas la publication/la création d'humains numériques (c'est le domaine de powpow-simple), ni le développement code.

## Task

Use `powpow-register-fr` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
