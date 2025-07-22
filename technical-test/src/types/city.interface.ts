import { Place } from "./place.interface"


export interface City {
  id: number
  name: string
  link: string
  image_link: string
  description: string
  altitude: number
  latitude: string
  longitude: string
  createdAt: string
  updatedAt: string
  places:    Place[]
}
