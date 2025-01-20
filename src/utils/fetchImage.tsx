import { supabase } from "../supabase";

export const fetchImages = async (bucketName: string) => {
    const { data, error } = await supabase.storage.from(bucketName).list();

    if (error) {
        console.error('Error fetching images:', error.message);
        return [];
    }

    if (data) {
        return data.map((file) => supabase.storage.from(bucketName).getPublicUrl(file.name).data.publicUrl);
    }

    return [];
};
