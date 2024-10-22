"use client";

import { Link, PlusIcon, Trash2Icon } from "lucide-react";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { FiImage } from "react-icons/fi"; // Import an image icon from react-icons

interface formCardProps {
  title: string;
  content: string;
  category: string;
  links: string[];
  publicId: string;
  imgUrl: string;
  setTitle: Dispatch<SetStateAction<string>>;
  setContent: Dispatch<SetStateAction<string>>;
  setCategory: Dispatch<SetStateAction<string>>;
  setLinks: Dispatch<SetStateAction<string[]>>;
  setPublicId: Dispatch<SetStateAction<string>>;
  setImgUrl: Dispatch<SetStateAction<string>>;
}
const FormCard: FC<formCardProps> = ({
  title,
  content,
  category,
  links,
  // publicId,
  // imgUrl,
  setTitle,
  setContent,
  setCategory,
  setLinks,
  // setPublicId,
  // setImgUrl,
}) => {
  const [linkValue, setLinkValue] = useState("");

  const LinkSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (linkValue.trim() === "") return;
    setLinks([...links, linkValue]);
    console.log(links);
    setLinkValue("");
  };
  const LinkDelete = (
    index: number,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    setLinks(links.filter((_, i) => i !== index));
  };

  return (
    <form className="flex flex-col gap-4 md:gap-7 justify-center items-center w-full">
      {/* Text Input */}
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Title"
        className="input input-bordered w-full"
      />

      {/* Textarea for Bio */}
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="textarea textarea-bordered w-full"
        placeholder="Content"
      ></textarea>

      {/* Select Dropdown */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="select select-bordered w-full"
      >
        <option defaultValue={""}>Select Category</option>
        <option>Han Solo</option>
        <option>Greedo</option>
      </select>

      {/* Additional Text Input */}
      <div className=" w-full p-3 flex flex-col gap-1 md:gap-2 ">
        {links &&
          links.map((link, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-3"
            >
              <div className="flex btn items-center justify-center">
                <Link className="w-4 h-4 md:w-6 md:h-6" />
              </div>
              <div className="flex-1 font-light text-xs md:text-base">
                {link}
              </div>

              <button
                onClick={(e) => LinkDelete(index, e)}
                className="flex items-center justify-center btn btn-error"
              >
                <Trash2Icon className="w-4 h-4 md:w-6 md:h-6" />
              </button>
            </div>
          ))}
      </div>
      <div className="w-full flex justify-between items-center gap-2 md:gap-4">
        <input
          value={linkValue}
          onChange={(e) => setLinkValue(e.target.value)}
          type="text"
          placeholder="Type here"
          className="input input-bordered flex-1"
        />
        <button
          onClick={LinkSubmit}
          className="btn flex items-center justify-center"
        >
          <PlusIcon />
        </button>
      </div>

      {/* Image File Input */}
      <label className="relative cursor-pointer flex flex-col items-center justify-center w-full h-40 border border-dashed border-gray-400 rounded-lg">
        <FiImage className="text-4xl text-gray-500" />
        <span className="mt-2 text-sm text-gray-500">Upload Image</span>
        <input
          type="file"
          accept="image/*"
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
      </label>

      {/* Submit Button */}
      <button type="submit" className="btn btn-neutral w-full">
        Create Post
      </button>
    </form>
  );
};

export default FormCard;
