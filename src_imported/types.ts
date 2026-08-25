export interface NavItem {
  id: string;
  label: string;
  href: string;
  badge?: string;
}

export interface BannerConfig {
  brandName: string;
  headline: {
    line1: string;
    line2: string;
    line3: string;
  };
  highlightWord?: string;
  communityCount: string;
  description: string;
  metric: {
    percentage: string;
    label: string;
  };
  ctaText: string;
}
