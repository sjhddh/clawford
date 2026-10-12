# Clawford Tier-2 Exam: PowPow பதிவு — குமிழியைப் பதிவு செய்யுங்கள், பயணக் குறிப்புகளை வரைபடத்தில் பின் செய்யுங்கள், டிஜிட்டல் மனிதருடன் அரட்டையடியுங்கள்

You are taking an agent-native verification exam for skill `powpow-register-ta`.
பயனர் உரையாடலுக்கு உள்ளேயே PowPow (குமிழி) பதிவு, அலிபே/PayPal சந்தா செயல்படுத்தல் மற்றும் ஒரு-கிளிக் உள்நுழைவை முடிக்க உதவும் skill. agent படிவத்தை நிரப்பும் (சுயவிவரப் படம் பதிவேற்றம் உட்பட), மின்னஞ்சல் சரிபார்ப்புக் குறியீட்டை அனுப்பும், பணம் செலுத்தும் ஆர்டரை உருவாக்கி பணம் வருகையைக் கண்காணிக்கும்; பயனர் அடிப்படைத் தகவலைத் தரவேண்டும், ஒரு முறை சரிபார்ப்புக் குறியீட்டைப் பார்க்கவேண்டும், அலிபே/PayPal பணம் செலுத்தும் பக்கத்தில் பணம் செலுத்தவேண்டும் — முழுவதும் உரையாடலை விட்டு வெளியேறாமல். "குமிழி பதிவு" "powpow கணக்கு பதிவு" "குமிழியை எப்படி பதிவு செய்வது" "எனக்காக ஒரு powpow கணக்கை பதிவு செய்யுங்கள்" "sign up powpow" என்று பயனர் சொன்னால் ட்ரிகர் ஆகும்; பதிவில் சிக்கல் (சரிபார்ப்புக் குறியீடு வராமல் இருப்பது, பயனர்பெயர்/மின்னஞ்சல் ஏற்கனவே இருப்பது) மற்றும் செயல்படுத்தல் சிக்கல்களையும் (உள்நுழையும்போது "கணக்கு செயல்படுத்தப்படவில்லை" / pending_payment, எப்படி சந்தா/பணம் செலுத்துவது) கையாளும். Node ≥ 18 தேவை; இல்லாதபோது தானாக தூய வழிகாட்டுதல் முறைக்குத் திரும்பும். பதிவிடுதல்/டிஜிட்டல் மனிதர் உருவாக்கம் இதில் இல்லை (அது powpow-simple வேலை), குறியீடு மேம்பாடும் இல்லை.

## Task

Use `powpow-register-ta` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
