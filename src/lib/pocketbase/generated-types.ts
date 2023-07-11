/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Hooks = "hooks",
	Messages = "messages",
	Proxies = "proxies",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string

// System fields
export type BaseSystemFields = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: { [key: string]: any }
}

export type AuthSystemFields = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields

// Record types for each collection

export enum HooksEventOptions {
	"insert" = "insert",
	"update" = "update",
	"delete" = "delete",
}

export enum HooksActionTypeOptions {
	"command" = "command",
	"post" = "post",
}
export type HooksRecord = {
	collection: string
	event: HooksEventOptions
	action_type: HooksActionTypeOptions
	action: string
	action_params?: string
	expands?: string
	disabled?: boolean
}

export type MessagesRecord = {
	message_id?: RecordIdString
	reply?: string
	user_id: RecordIdString
	request_user_id?: RecordIdString
	content?: string
	stream?: boolean
}

export type ProxiesRecord = {
	user_id: RecordIdString
	name?: string
}

export enum UsersStatusOptions {
	"free" = "free",
	"busy" = "busy",
	"offline" = "offline",
}
export type UsersRecord = {
	name?: string
	avatar?: string
	status?: UsersStatusOptions
}

// Response types include system fields and match responses from the PocketBase API
export type HooksResponse = HooksRecord & BaseSystemFields
export type MessagesResponse = MessagesRecord & BaseSystemFields
export type ProxiesResponse = ProxiesRecord & BaseSystemFields
export type UsersResponse = UsersRecord & AuthSystemFields

export type CollectionRecords = {
	hooks: HooksRecord
	messages: MessagesRecord
	proxies: ProxiesRecord
	users: UsersRecord
}