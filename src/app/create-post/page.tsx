"use client";

import FormCard from "@/components/FormCard";
import { useState } from "react";

const CreatePostPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [links, setLinks] = useState<string[]>([]);
  const [publicId, setPublicId] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  return (
    <div className="space-y-5 max-w-3xl mx-auto">
      <h1 className="font-bold text-xl text-center">Create Post</h1>
      <FormCard
        title={title}
        content={content}
        category={category}
        links={links}
        publicId={publicId}
        imgUrl={imgUrl}
        setTitle={setTitle}
        setContent={setContent}
        setCategory={setCategory}
        setLinks={setLinks}
        setPublicId={setPublicId}
        setImgUrl={setImgUrl}
      />
    </div>
  );
};

export default CreatePostPage;
