
export interface GalleryItem {
  id: string;
  url: string;
  category: 'event' | 'drink' | 'team';
  caption: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
  features: string[];
}

export interface CMSContent {
  home: {
    heroTitle: string;
    heroSubtitle: string;
    heroImageUrl: string;
    aboutSummaryImageUrl: string;
    stats: { label: string; value: string }[];
  };
  about: {
    title: string;
    history: string;
    essence: string;
    mission: string;
    vision: string;
    values: string[];
    heroImageUrl: string;
    storyImageUrl: string;
  };
  services: ServiceDetail[];
  gallery: GalleryItem[];
  testimonials: Testimonial[];
  externalBudgetUrl: string;
  whatsappNumber: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  user: string | null;
}
