import Image from "next/image";
import { Container, Title} from "@/components/shared";
import PostsComponent from "@/components/shared/posts-component";
import FriendsComponent from "@/components/shared/friends-component";

export default function Home() {
  return <>
    <div className="w-full h-full flex">
      <PostsComponent/>
      <FriendsComponent/>
    </div>
  </>;
}
