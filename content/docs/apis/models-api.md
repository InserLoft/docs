---
title: Models API
description: List and inspect models available through the API.
section: APIs
order: 4
---

The Models API lets you list and inspect the models available to your Organization, backed directly by the Pixel [Model Registry](/docs/platform/model-registry).

```bash
curl https://api.inserloft.dev/v1/models \
  -H "Authorization: Bearer $INSERLOFT_API_KEY"
```

```bash
curl https://api.inserloft.dev/v1/models/verty-instruct \
  -H "Authorization: Bearer $INSERLOFT_API_KEY"
```

Each model entry returned includes its identifier, family (for example, Kyro or Verty), version, and a link to its [Model Card](/docs/models/model-cards).
