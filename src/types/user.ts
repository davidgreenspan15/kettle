export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
  isAdmin: boolean;
  tickets: any[];
}