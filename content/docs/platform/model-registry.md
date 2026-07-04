---
title: Model Registry
description: How models are versioned, cataloged, and documented on Pixel.
section: Platform
order: 5
---

The Model Registry is where every model published on Pixel lives — from the Kyro frontier family to community-uploaded checkpoints.

Each entry in the registry includes:

- **Versioning** — models follow explicit version tags, similar to software releases
- **Model Cards** — structured documentation describing intended use, limitations, and training data
- **Files** — the actual weights, configs, and tokenizer assets
- **Documentation** — usage instructions and API compatibility notes

The registry is what powers model discovery on Pixel and is the source of truth referenced by the [Models API](/docs/apis/models-api) when resolving a model identifier.
