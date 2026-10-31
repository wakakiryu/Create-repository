export function usePageSeo(title: string, description: string, path: string) {
  const url = 'https://www.myhobby.jp' + path
  useSeoMeta({ title: title + ' | MyHobby', description, ogTitle: title + ' | MyHobby', ogDescription: description, ogUrl: url, ogType: 'website', ogImage: 'https://www.myhobby.jp/social-card.png', twitterCard: 'summary_large_image' })
  useHead({ link: [{ rel: 'canonical', href: url }] })
}

