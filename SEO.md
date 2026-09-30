# QuHacks search setup

The canonical domain is `https://quhacks.com`, matching `CNAME`. Shared metadata and organization information live in `src/lib/seo.js`. The build exports `/robots.txt` and `/sitemap.xml` alongside the HTML for GitHub Pages.

## After deployment

1. Verify ownership of `quhacks.com` in [Google Search Console](https://search.google.com/search-console/about). A domain property requires adding Google's verification record through the domain's DNS provider.
2. Submit `https://quhacks.com/sitemap.xml` in Search Console's Sitemaps section.
3. Inspect `https://quhacks.com/` with URL Inspection, test the live URL, and request indexing. Review indexing reports for crawl errors or excluded pages.
4. Ask schools, sponsors, and event directories that already mention QuHacks to link to `https://quhacks.com/` with an accurate description of the event.

Google decides whether to index and rank a page; changes are not immediate and no placement is guaranteed. See [Google's Search Essentials](https://developers.google.com/search/docs/essentials) and [sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).

## Content maintenance

- Use “Maryland’s largest high school hackathon” only after organizers confirm the claim and its basis. Add supporting attendance information to the visible page when available, then update the homepage title and description in `src/lib/seo.js` to match.
- Once the 2027 date and venue are confirmed, update the page and add accurate Event structured data. Do not invent a date or location to qualify for event search results.
- Keep the sitemap limited to public content pages. Admin, judging, and raffle pages use `noindex` metadata and remain crawlable so search engines can read that directive. This is not access control.
- If the domain changes, update `CNAME` and `siteUrl` together and configure permanent redirects from the old domain through the hosting or domain provider.
