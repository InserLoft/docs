---
title: Chat API
description: A conversation-oriented API for building chat experiences.
section: APIs
order: 3
---

The Chat API is built around multi-turn conversations, using a message list similar to other chat completion APIs.

```bash
curl https://api.inserloft.dev/v1/chat \
  -H "Authorization: Bearer $INSERLOFT_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "kyro-3",
    "messages": [
      { "role": "user", "content": "What is Pixel Platform?" }
    ]
  }'
```

The Chat API powers the conversational experience behind [Cleo](/docs/cleo/chat) and is a good fit when you're building a chat-style product rather than a single-shot generation feature — for single-shot or tool-heavy use cases, consider the [Responses API](/docs/apis/responses-api) instead.
