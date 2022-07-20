export type dataType = {
	id: string
	created_at: string
	updated_at: string
	promoted_at: null | string
	width: number
	height: number
	color: string
	blur_hash: string
	description: null | string
	alt_description: null | string
	urls: dataUrls
	links: dataLinks
	categories: []
	likes: number
	liked_by_user: boolean
	current_user_collections: []
	sponsorship: {}
	topic_submissions: {}
	user: dataUser
}

export type dataUrls = {
	raw: string
	full: string
	regular: string
	small: string
	thumb: string
	small_s3: string
}

export type dataLinks = {
	self: string
	html: string
	download: string
	download_location: string
}

export type dataUser = {
	id: string
	updated_at: string
	username: string
	name: string
	first_name: string
	last_name: string
	twitter_username: null
	portfolio_url: string
	bio: string
	location: null
	links: dataUserLinks
	profile_image: dataUserProfileImg
	instagram_username: string
	total_collections: number
	total_likes: number
	total_photos: number
	accepted_tos: boolean
	for_hire: boolean
	social: dataUserSocial
}

type dataUserLinks = {
	self: string
	html: string
	photos: string
	likes: string
	portfolio: string
	following: string
	followers: string
}

type dataUserProfileImg = {
	small: string
	medium: string
	large: string
}

type dataUserSocial = {
	instagram_username: string
	portfolio_url: string
	twitter_username: null
	paypal_email: null
}
