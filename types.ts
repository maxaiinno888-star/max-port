
export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  role: string;
  tags: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface CareerEvent {
  year: string;
  title: string;
  location: string;
  link: string;
}
