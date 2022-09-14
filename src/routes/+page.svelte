<script lang="ts">
	import {
		PUBLIC_SITE_TITLE,
		PUBLIC_SITE_URL,
		PUBLIC_SITE_DESCRIPTION,
		PUBLIC_SITE_OG_IMAGE,
		PUBLIC_SITE_TWITTER_HANDLE
	} from '$env/static/public'

	export const prerender = true
</script>

<svelte:head>
	<title>{PUBLIC_SITE_TITLE}</title>
	<link rel="canonical" href={PUBLIC_SITE_URL} />
	<link rel="alternate" type="application/rss+xml" href={PUBLIC_SITE_URL + '/rss.xml'} />
	<meta property="og:url" content={PUBLIC_SITE_URL} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={PUBLIC_SITE_TITLE} />
	<meta name="Description" content={PUBLIC_SITE_DESCRIPTION} />
	<meta property="og:description" content={PUBLIC_SITE_DESCRIPTION} />
	<meta property="og:image" content={`${PUBLIC_SITE_URL}/images/${PUBLIC_SITE_OG_IMAGE}`} />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content={'@' + PUBLIC_SITE_TWITTER_HANDLE} />
	<meta name="twitter:title" content={PUBLIC_SITE_TITLE} />
	<meta name="twitter:description" content={PUBLIC_SITE_DESCRIPTION} />
	<meta name="twitter:image" content={`${PUBLIC_SITE_URL}/images/${PUBLIC_SITE_OG_IMAGE}`} />
</svelte:head>
<h2>hi</h2>
<slot />
