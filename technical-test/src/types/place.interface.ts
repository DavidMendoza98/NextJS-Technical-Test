import { Like } from "./like.interface"
import { Rating } from "./rating.interface"

export interface Place {
  id: number
  name: string
  description: string
  url: string
  image_url: string
  id_city: number
  ratings:Rating[]
  likes:Like[]
  createdAt: string
  updatedAt: string
}
