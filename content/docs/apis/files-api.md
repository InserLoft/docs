---
title: Files API
description: Upload and manage files used by other APIs.
section: APIs
order: 6
---

The Files API is used to upload documents, datasets, and other files that other APIs — such as the [Responses API](/docs/apis/responses-api) — can reference.

```bash
curl https://api.inserloft.dev/v1/files \
  -H "Authorization: Bearer $INSERLOFT_API_KEY" \
  -F "file=@report.pdf" \
  -F "purpose=assistant"
```

Files uploaded through this API are private to your Organization by default and are distinct from files published inside a Pixel [Project](/docs/platform/projects), which are meant for sharing rather than API consumption.

Two additional endpoints are planned as part of this family: an **Audio API** and an **Image API**, alongside a future **Agents API** for orchestrating multi-step, tool-using agents built on Cleo.
