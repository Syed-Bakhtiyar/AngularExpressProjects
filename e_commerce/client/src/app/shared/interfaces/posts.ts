import { PictureMetada } from "./pictureMetadata";

export interface Post {
    id?: number;
    user_id: number;
    post?: string;
    picture_metadata?: PictureMetada;
    imagePath?: string;
    image_name?: string;
    image_path?: string;
}
