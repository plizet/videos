export interface Video {
  autoplay?: boolean;
  height?: number;
  mp4Url?: string;
  ogvUrl?: string;
  poster?: string;
  preload?: string;
  webmUrl?: string;
  width?: number;
}

export interface VideoInfos extends Video {
  category?: string;
  year?: string;
  description?: string;
  id: number;
  subtitle?: string;
  title?: string;
  thumbnail?: string;
  urlName?: string;
}
