export const EXPORT_COMMENT = `/**
* This file was @generated using pocketbase-typegen
*/`
export const IMPORTS = `import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'`
export const RECORD_TYPE_COMMENT = `// Record types for each collection`
export const RESPONSE_TYPE_COMMENT = `// Response types include system fields and match responses from the PocketBase API`
export const ALL_RECORD_RESPONSE_COMMENT = `// Types containing all Records and Responses, useful for creating typing helper functions`
export const TYPED_POCKETBASE_COMMENT = `// Type for usage with type asserted PocketBase instance\n// https://github.com/pocketbase/js-sdk#specify-typescript-definitions`
export const EXPAND_GENERIC_NAME = "expand"
export const DATE_STRING_TYPE_NAME = `IsoDateString`
export const RECORD_ID_STRING_NAME = `RecordIdString`
export const HTML_STRING_NAME = `HTMLString`
export const ALIAS_TYPE_DEFINITIONS = `// Alias types for improved usability
export type ${DATE_STRING_TYPE_NAME} = string
export type ${RECORD_ID_STRING_NAME} = string
export type ${HTML_STRING_NAME} = string`
export const IS_EXACTLY_UNKNOWN_TYPE_DEFINITION = `// Utility type to check if T is exactly unknown
type IsExactlyUnknown<T> =
  unknown extends T
    ? T extends unknown
      ? keyof T extends never
        ? true
        : false
      : false
    : false`
export const BASE_SYSTEM_FIELDS_DEFINITION = `// System fields
export type BaseSystemFields<T = unknown> = IsExactlyUnknown<T> extends true
  ? {
    id: ${RECORD_ID_STRING_NAME}
    collectionId: string
    collectionName: Collections
    expand?: unknown
  }
  : {
    id: ${RECORD_ID_STRING_NAME}
    collectionId: string
    collectionName: Collections
    expand: T
  };`

export const AUTH_SYSTEM_FIELDS_DEFINITION = `export type AuthSystemFields<T = unknown> = {
  email: string
  emailVisibility: boolean
  username: string
  verified: boolean
} & BaseSystemFields<T>`
