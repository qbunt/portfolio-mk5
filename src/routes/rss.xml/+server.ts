import RSS from 'rss'
import { slugFromPath } from '$lib/util.js'

	import {
		PUBLIC_SITE_TITLE,
		PUBLIC_SITE_URL,
    PUBLIC_SITE_DESCRIPTION,
    PUBLIC_SITE_AUTHOR,
		PUBLIC_SITE_OG_IMAGE,
    PUBLIC_SITE_TWITTER_HANDLE,
    PUBLIC_SITE_COPYRIGHT,
    PUBLIC_SITE_LANGUAGE
	} from '$env/static/public'


const feed = new RSS({
  title: PUBLIC_SITE_TITLE,
  site_url: PUBLIC_SITE_URL,
  feed_url: `${PUBLIC_SITE_URL}/blog/rss.xml`,
  description: PUBLIC_SITE_DESCRIPTION,
  author: PUBLIC_SITE_AUTHOR,
  language: PUBLIC_SITE_LANGUAGE,
  copyright: PUBLIC_SITE_COPYRIGHT,
  generator: `SvelteKit`,
  pubDate: new Date()
})

export const GET = async () => {
  const allPosts = await Promise.all(
    Object.entries(import.meta.glob('../posts/*.md')).map(
      async ([path, page]) => {
        const { metadata, default: fullPage } = await page()
        return {
          ...metadata,
          slug: slugFromPath(path),
          // draw the rest of the 🦉
          rendered: fullPage.render().html
        }
      }
    )
  )

  const filteredPosts = allPosts.filter((post) => post.published)
  const sortedPosts = filteredPosts.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  )

  sortedPosts.forEach((post) => {
    feed.item({
      title: post.title,
      url: `${PUBLIC_SITE_URL}/blog/${post.slug}`,
      guid: post.slug,
      date: post.date,
      description: post.rendered,
      author: post.author
    })
  })

  const body = feed.xml({ indent: true })
  const headers = {
    'Cache-Control': `max-age=0, s-max-age=${600}`,
    'Content-Type': 'application/xml'
  }
  return new Response(body)
  
}
