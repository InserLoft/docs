---
title: Deployments
description: Taking a model or project from the registry into a running endpoint.
section: Platform
order: 6
---

A Deployment turns a model version or Project into a running, callable endpoint.

Deployments on Pixel are meant to close the gap between "the model exists in the registry" and "the model is serving traffic." Conceptually, a Deployment tracks:

- Which model version is deployed
- The configuration used to serve it (hardware, scaling, region)
- Health and usage over time

Deployments are what the [APIs](/docs/apis/authentication) ultimately call into when a request references a specific model. Inserloft-hosted frontier models such as Kyro are deployed and maintained centrally; self-hosted or fine-tuned models can be deployed by their owning Project.

Spaces — interactive, hosted demos built on top of a Deployment — are a planned future addition to this part of the Platform.
