import type {Post} from './Post';

export interface User 
{
    id: string;
    userName: string;
    email: string;
    posts: Post[];
}