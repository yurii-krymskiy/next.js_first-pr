"use client";
import { pocketbase } from "@/app/lib/pocketbase";
import { RecordModel } from "pocketbase";
import React, { useEffect, useState } from "react";
import { CommentForm } from '../../components/CommentFrom/commentForm'

import { pageProps } from "@/app/types/pageProps";
import { CommentList } from "@/app/components/CommentList/commentList";
import { getComment } from "@/app/lib/client";

const PostPage: React.FC<pageProps> = ({ params }) => {
  const [commentList, setCommentList] = useState<RecordModel[]>([]);
  const newId = params.id 
  
  const addComment = ({ ...data }) => {
    const newComment: RecordModel = {
      id: "", 
      collectionId: "", 
      collectionName: "", 
      created: "", 
      updated: "", 
      ...data, 
    };

    setCommentList(currentList => [...currentList, newComment]);
    console.log(newComment);
  };

  
  const { getPosts } = pocketbase();
  const [post, setPost] = useState<RecordModel | null>(null);
  

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await getPosts();
        const foundPost = result.find((p) => p.id === params.id);
        setPost(foundPost || null);

        const result2 = await getComment(); // Завантажує всі коментарі
        const filteredPosts = result2.record.filter(comment => comment.personalId === params.id);
        setCommentList(filteredPosts);
  
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };
    loadData();
  }, [params.id]);
  


  return (
    <div className="bg-EEE0C9 min-h-screen p-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        {post ? (
          <div>
            <div>
              <h2 className="text-2xl font-semibold mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
                {post.title}
              </h2>
              <img src={post.url} className="text-blue-500" />
              <p className="mt-6">{post.fulldesc}</p>
              <p className="mt-6 text-gray-600">{post.date}</p>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div className="max-w-2xl mx-auto mt-8">
        <CommentForm id={newId} onSubmit={addComment} />
      </div>

      <div className="max-w-2xl mx-auto mt-8">
        <CommentList comment={commentList} />
      </div>
    </div>
  );
};

export default PostPage;