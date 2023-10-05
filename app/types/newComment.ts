import { RecordModel } from "pocketbase";

export interface NewComment {
  id: string,
  name: string,
  email: string,
  comment: string,
}
