import React from "react";
import { NewComment } from "@/app/types/newComment";
import { CommentInfo } from "./commentInfo";
import { RecordModel } from "pocketbase";

type Props = {
  comment: RecordModel[];
};

export const CommentList: React.FC<Props> = ({ comment }) => {
  
  return (
    <section className="space-y-4">
      {comment
        ? comment.map((item, index) => (
            <CommentInfo key={index} comment={item} />
          ))
        : null}
    </section>
  );
};
