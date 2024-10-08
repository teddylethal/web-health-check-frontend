import { SQLModel } from '../utils/sql.type'

export interface WebsiteModel extends SQLModel {
  name: string
  path: string
  time_interval: number
  retry: number
  default_email: string
  status: string
}

export interface WebsiteCreate {
  name: string
  path: string
  time_interval: number
  retry: number
  default_email: string
}

export interface WebsiteUpdate {
  name?: string
  path?: string
  time_interval?: number
  retry?: number
  default_email?: string
}

export interface WebsiteContactModel {
  id: number
  website_id: number
  address: string
  contact_method: string
}

export interface WebsiteChecktimeModel {
  id: number
  website_id: number
  check_time: string
}
