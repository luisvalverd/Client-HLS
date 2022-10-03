export interface Video {
  id_video: string;
  title: string;
  description: string;
  path_video: string;
  path_image: string;
  path_stream: string;
  minutes: number;
  seconds: number;
  categories: Category[];
  actors: Actor[];
}

export interface Category {
  id_category: string;
  name: string;
  total_videos?: number;
  videos?: Video[];
}

export interface Actor {
  id_actor: string;
  nickname: string;
  ranking?: number;
  gender: number;
  avatar: string;
  videos: Video[];
}
