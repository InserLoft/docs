---
title: Responses API
description: The primary API for generating model output from Inserloft models.
section: APIs
order: 2
---

The Responses API is the recommended way to generate output from any Inserloft model, including [Kyro](/docs/models/kyro) and [Verty](/docs/models/verty).

```bash
curl https://api.inserloft.dev/v1/responses \
  -H "Authorization: Bearer $INSERLOFT_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "kyro-3",
    "input": "Explain what a Baby LLM is."
  }'
```

The Responses API is designed to be the long-term surface for both simple prompts and complex, multi-step, tool-using requests — the same kind of interaction Cleo uses internally. See [Chat API](/docs/apis/chat-api) for the conversation-oriented alternative.
