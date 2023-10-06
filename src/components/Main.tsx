"use client";
import { useEffect, useState } from "react";
import { PiArrowFatUpLight, PiArrowFatDownLight } from "react-icons/pi";
import { HiOutlineChatBubbleLeft } from "react-icons/hi2";
import { FiShare } from "react-icons/fi";
import Divider from "./Divider";

type LinkFlairRichtext = {
  e: string;
  t: string;
};

type Post = {
  approved_at_utc: any;
  subreddit: string;
  selftext: string;
  author_fullname: string;
  saved: boolean;
  mod_reason_title: any;
  gilded: number;
  clicked: boolean;
  title: string;
  link_flair_richtext: LinkFlairRichtext[];
  subreddit_name_prefixed: string;
  hidden: boolean;
  pwls: number;
  link_flair_css_class: string;
  downs: number;
  thumbnail_height?: number;
  top_awarded_type: any;
  hide_score: boolean;
  name: string;
  quarantine: boolean;
  link_flair_text_color: string;
  upvote_ratio: number;
  author_flair_background_color?: string;
  ups: number;
  total_awards_received: number;
  thumbnail_width?: number;
  author_flair_template_id?: string;
  is_original_content: boolean;
  user_reports: any[];
  secure_media: any;
  is_reddit_media_domain: boolean;
  is_meta: boolean;
  category: any;
  link_flair_text: string;
  can_mod_post: boolean;
  score: number;
  approved_by: any;
  is_created_from_ads_ui: boolean;
  author_premium: boolean;
  thumbnail: string;
  edited: any;
  author_flair_css_class?: string;
  post_hint?: string;
  content_categories: any;
  is_self: boolean;
  subreddit_type: string;
  created: number;
  link_flair_type: string;
  wls: number;
  removed_by_category: any;
  banned_by: any;
  author_flair_type: string;
  domain: string;
  allow_live_comments: boolean;
  selftext_html?: string;
  likes: any;
  suggested_sort: any;
  banned_at_utc: any;
  url_overridden_by_dest?: string;
  view_count: any;
  archived: boolean;
  no_follow: boolean;
  is_crosspostable: boolean;
  pinned: boolean;
  over_18: boolean;
  all_awardings: any[];
  awarders: any[];
  media_only: boolean;
  link_flair_template_id: string;
  can_gild: boolean;
  spoiler: boolean;
  locked: boolean;
  author_flair_text?: string;
  treatment_tags: any[];
  visited: boolean;
  removed_by: any;
  mod_note: any;
  distinguished: any;
  subreddit_id: string;
  author_is_blocked: boolean;
  mod_reason_by: any;
  num_reports: any;
  removal_reason: any;
  link_flair_background_color: string;
  id: string;
  is_robot_indexable: boolean;
  report_reasons: any;
  author: string;
  discussion_type: any;
  num_comments: number;
  send_replies: boolean;
  whitelist_status: string;
  contest_mode: boolean;
  mod_reports: any[];
  author_patreon_flair: boolean;
  author_flair_text_color?: string;
  permalink: string;
  parent_whitelist_status: string;
  stickied: boolean;
  url: string;
  subreddit_subscribers: number;
  created_utc: number;
  num_crossposts: number;
  media: any;
  is_video: boolean;
  crosspost_parent?: string;
  is_gallery?: boolean;
};

type RedditPostsResponse = {
  kind: string;
  data: { children: { kind: string; data: Post }[] };
};

const Main = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.reddit.com/r/pokemon/new.json?limit=25")
      .then((response) => response.json())
      .then((data: RedditPostsResponse) => {
        setPosts(data.data.children.map((post) => post.data));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados da API:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }
  return (
    <div>
      <div className="flex gap-4 items-center px-4 md:px-6">
        <img
          className="w-14 h-14 rounded-full"
          src="/communityIcon.png"
          alt="community logo"
        />
        <h1 className="font-bold text-xl ">r/pokemon</h1>
      </div>
      <div>
        {posts.map((post) => (
          <div
            className="flex flex-col gap-4 p-4 md:p-6 items-start"
            key={post.id}
          >
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full mr-3"
                src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_0.png"
                alt="user profile picture"
              />
              <strong>u/{post.author}</strong>
            </div>
            <h3 className="md:text-2xl text-xl font-bold ">{post.title}</h3>
            <span
              style={{ backgroundColor: post.link_flair_background_color }}
              className="rounded-full py-0.5 px-2 text-white"
            >
              {post.link_flair_text}
            </span>
            <p>{post.selftext}</p>
            <div className="flex gap-2 md:gap-4 ">
              <button className="flex items-center bg-gray-200 rounded-full gap-2 p-2 font-bold">
                <PiArrowFatUpLight />
                Votar
                <PiArrowFatDownLight />
              </button>
              <button className="flex items-center bg-gray-200 rounded-full gap-2 p-2 font-bold">
                <HiOutlineChatBubbleLeft />0
              </button>
              <button className="flex items-center bg-gray-200 rounded-full gap-2 p-2 font-bold">
                <FiShare />
                Compartilhar
              </button>
            </div>
            <Divider />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
