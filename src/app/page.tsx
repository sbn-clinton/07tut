import HeroPage from "@/components/Hero";
import PostCard from "@/components/PostCard";

export default function Home() {
  return (
    <div className=" flex flex-col gap-5 md:gap-10">
      <h1 className="font-bold text-xl text-center">All Post</h1>
      <HeroPage />
      <div className="flex flex-col gap-3 md:gap-6">
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
}
