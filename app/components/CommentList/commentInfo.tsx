import React from "react";
import { NewComment } from "@/app/types/newComment";
import { RecordModel } from "pocketbase";

type Props = {
  comment: RecordModel;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  
  return (
    <article className="bg-gray-100 border p-4 rounded-md">
      <h2 className="text-xl font-semibold mt-2">{comment.name}</h2>
      <p className="mt-2">{comment.comment}</p>
    </article>
  );
};
