---
title: Embeddings API
description: Generate vector embeddings from text.
section: APIs
order: 5
---

The Embeddings API converts text into vector representations, useful for search, retrieval, and clustering.

```bash
curl https://api.inserloft.dev/v1/embeddings \
  -H "Authorization: Bearer $INSERLOFT_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "verty-base",
    "input": "Pixel Platform is Inserloft'\''s AI workspace."
  }'
```

Embeddings are commonly generated with efficient [Baby LLMs](/docs/models/baby-llms) such as Verty, since embedding workloads tend to favor speed and cost over frontier-level reasoning.
