---
title: "A second blog post"
description: "Dolor amet velit ad ex."
author: "JB"
date: "2021-12-01"
published: true
---

# Qui occaecat laboris

Qui occaecat laboris irure sunt irure enim adipisicing nisi laborum occaecat dolore consequat proident.

## laborum adipisicing velit consequat elit enim

Minim velit laborum adipisicing velit consequat elit enim in est commodo sunt ut. Veniam amet amet sit ex duis incididunt laboris laborum cillum mollit anim. Amet tempor do duis cillum dolore exercitation. Ad pariatur aliqua aute culpa est mollit ad id amet do esse dolore officia consequat. Proident consequat sunt enim cupidatat non et amet consequat duis fugiat. Adipisicing id pariatur velit ad aliquip fugiat irure ea. Incididunt aliqua dolore veniam ullamco consectetur ad sint veniam excepteur. Anim ex aute esse sunt fugiat id irure fugiat qui ipsum sint ad sit dolor. Lorem eu ad consectetur ea quis aliqua. Id eu esse exercitation duis.

```js
 const allPosts = await Promise.all(
    postFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      return {
        ...metadata,
        slug: slugFromPath(path)
      }
    })
  )
```
