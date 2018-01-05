---
layout: strategy
title: Building prototypes
description: Learn how to use prototypes to reduce risk and ambiguity before issuing an RFP
permalink: /prototypes/
tags: strategy
image: /assets/img/strategy-images/prototype.jpg
image-credit: https://www.flickr.com/photos/baldiri/
---

## Principles of Acquisition Prototyping

Acquisition prototypes can be used to “de-risk” technology acquisitions where there are unknowns, or unvalidated technology choices. Prototypes are one tool available to governments that are working towards a procurement, and can be used to mitigate risk and reduce ambiguity. They can help to reduce risk in complex IT procurements, especially when coupled with the adoption of agile practices and procurements that are smaller and more modular.

## Overview

Technical prototypes serve many useful purposes, but they can be particularly useful to support an acquisition. An acquisition prototype can help uncover hidden risks and validate core technical assumptions. It can help buyers better understand what they are asking a vendor for, and help them to craft a more meaningful scope of work for an acquisition. It can also serve as a reference implementation for prospective vendors, complementing procurement documents with a working example of what a buyer needs.

Rather than having a vendor raise questions during a contract's period of performance, prototyping allows the buying agency to anticipate hurdles, so that those can be shared with potential vendors in procurement documents. Knowing the constraints and issues before putting together a proposal helps to set up vendors for success.

The following principles are meant to guide product teams in the use of technical prototypes in support of an acquisition. Note: This is a living document, and will be modified frequently as product teams become more proficient and experienced in using prototypes.

## Guiding Principles

### Avoid Premature Optimization

An acquisition prototype should support a procurement, not become an impediment to it. It should be developed rapidly, using a relatively lightweight approach and at low cost. Guard against over-optimization.

Unlike other kinds of prototypes, acquisition prototypes are not typically used as a way to obtain user feedback, but rather to understand the mechanics behind a hypothetical user's experience. It should approximate a user’s experience to help identify risk, and to help validate technical decisions.

If the logic behind modular procurement is to break down large projects into smaller chunks to reduce risk, employ this same approach when prototyping. Instead of thinking of a prototype as an immutable whole, consider how it can be broken into pieces to address different questions or technical risks.

For example, consider using a boilerplate app (or simple demo app) to support development of a Git merging / branching strategy for a project, or to build out a [DevOps pipeline](/devops), particularly for clients that do not have a well-developed DevOps culture.

### Help vendors, don’t handcuff them

An acquisition prototype can serve as a reference implementation for a vendor, by demonstrating one approach to technical issues like data access or authentication.

An acquisition prototype should not dictate a choice of specific technology or approach (e.g., one language over another), unless there are compelling reasons to do so. But a prototype should adhere to the technology requirements of the client (e.g., if a client’s IT standards dictate Microsoft .NET platform as the preferred technology stack, the prototype should be built on this stack).

### Use all the tools in risk mitigation toolbox

A prototype should minimize risk prior to procurement, but probably won’t eliminate it. There may be questions unanswered or risks present when issuing an RFP — that’s normal. RFPs themselves should have some provisions for managing risk (particularly if they are smaller in scope), and using an agile methodology can provide opportunities to change course as issues arise after contract award.

### Help the buyer develop prototyping capacity

Be sure to assess the capability of the client to continue prototype work after the engagement is over. If you’re not helping the buyer develop their own capacity for using prototypes, you’re probably doing it wrong.

One of the goals of Acq engagements (and [18F engagements in general](https://partnership-playbook.18f.gov/7-transfer-projects-back/)) is to impart strategies and techniques to our clients that will allow them to practice modular procurement on their own going forward, and on other projects. We should intentionally include client staff in prototype work so they have an ownership stake in the process and familiarity with how to use prototyping to support future procurements.

### Understand security requirements

It’s important to understand security requirements in the client environment that can impact prototyping work.

Does the client have the policy and technical infrastructure in place to support prototyping? Is a full System Security Plan required to build a prototype that isn’t intended to be deployed to a production environment or require ongoing O&M?

Does the client have the technical infrastructure in place to support prototyping? Is test data available for use in building a prototype? Is there an environment where test apps or prototypes can be efficiently deployed?

Consider adding someone that can represent the client’s security office to the product team. Give this person a seat at the table from day one.

### Focus on lessons, not artifacts

Sometimes the outcome of the prototyping process is not (or not _just_) a finished prototype, but a better understanding of the environment in which procured software will run. For example, developing a prototype might involve evaluating different methods of accessing data in a legacy system, which could yield multiple viable data access techniques. Having a better understanding of the different ways a vendor solution might access legacy data could be enormously valuable to a project.
