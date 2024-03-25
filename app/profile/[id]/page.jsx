"use client";

import { useSession } from "next-auth/react";
import { useRouter, useParams } from "next/navigation";
import Profile from "@components/Profile";
import { useEffect, useState } from "react";

const MyProfile = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const { id } = useParams();
  const [posts, setPosts] = useState();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${id}/posts`);

      const data = await response.json();

      setPosts(data);
    };

    if (id) fetchPosts();
  }, []);

  return <Profile name="User" desc="Profile page" data={posts} />;
};

export default MyProfile;
