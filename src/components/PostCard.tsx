import Image from "next/image";

const PostCard = () => {
  return (
    <div className="flex flex-col md:flex-row gap-3">
      <div className="w-full md:w-2/5">
        <Image
          src={"/assets/pexels-1.jpg"}
          alt="img"
          width={500}
          height={500}
          className="w-full rounded-t-md md:rounded-t-none md:rounded-s-md"
        />
      </div>
      <div className="flex flex-col md:justify-between gap-3 w-full md:w-3/5">
        <div className="font-bold text-lg md:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </div>
        <div className="font-light text-sm md:text-base ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
          ducimus nobis iure tenetur accusamus recusandae?
        </div>
        <div className="flex items-center justify-between">
          <div className="font-bold text-sm md:text-base">Category</div>
          <div className="font-bold text-sm md:text-base">
            12-12-2024/ 12:24pm
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className=" btn-neutral btn font-bold text-sm md:text-base">
            Edit
          </div>
          <div className="font-bold btn btn-error text-sm md:text-base">
            Delete
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
