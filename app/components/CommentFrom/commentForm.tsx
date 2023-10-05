import React, { useState } from "react";
import { NewComment } from "@/app/types/newComment";
import { addComments } from "@/app/lib/client";

type Props = {
  id: string;
  onSubmit: (todo: NewComment) => void;
};

type Data = {
  personalId: string,
  name: string,
  email: string,
  comment: string,
}

export const CommentForm: React.FC<Props> = ({ onSubmit, id }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false); 

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setComment(event.target.value);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setComment("");
  };


  const data: Data = {
    personalId: id,
    name,
    email,
    comment,
  }


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!name && !email && !comment) {
      return;
    }

    onSubmit({ id, name, email, comment });

    handleReset();

    setSubmitted(true); 
    addComments(data)
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Ім'я:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleTitleChange}
            required
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Електронна пошта:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="comment"
            className="block text-sm font-medium text-gray-700"
          >
            Коментар:
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={handleCommentChange}
            required
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="inline-block bg-96B6C5 text-white px-4 py-2 rounded-md hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Відправити коментар
          </button>
        </div>
      </form>
    </div>
  );
};

