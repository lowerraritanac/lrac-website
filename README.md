# Lower Raritan Athletic Club Website

Astro site for Lower Raritan Athletic Club.

## The only places you should normally edit

### Club information and navigation
Edit:

`data/site.js`

Use this for the club name, LRAC abbreviation, founding year, location, description, and navigation.

### Athletes
Edit:

`data/athletes.js`

Each athlete has one object containing:
- name
- slug
- sport
- location
- background
- image
- bio
- accomplishments
- current focus
- PRs

The homepage, Athletes page, and individual athlete pages all read from this same file.

### Races and results
Edit:

`data/schedule.js`

Add or update a race once here. The homepage, Racing page, and athlete pages read from this file.

For a shared race, list every athlete in both `athletes` and `athleteSlugs`.

### Writing, training reports, and race reports
Add a Markdown file to:

`src/content/training/`

Example frontmatter:

```md
---
title: "Example Post"
description: "Short description."
date: 2026-09-06
category: "Writing"
athlete: "Liam Tilton"
athleteSlug: "liam-tilton"
featured: true
---

Write the article here.
```

Allowed categories:
- `Writing`
- `Training Report`
- `Race Report`

The Training page, homepage, and athlete pages update automatically.

### Images
Athlete images:

`public/images/athletes/`

Homepage image:

`public/images/hero.jpg`

## Files you generally should not need to edit

`src/pages/` controls page layouts.

`src/components/` contains reusable pieces such as the athlete card, header, and footer.

`src/styles/global.css` contains global colors and typography.

## Local development

```sh
npm install
npm run dev
```

Production check:

```sh
npm run build
```

## Rule of thumb

Content belongs in `data/` or `src/content/`.

Pages display that content. Do not hard-code athlete, race, or article information directly into page files unless it is purely presentation copy.
