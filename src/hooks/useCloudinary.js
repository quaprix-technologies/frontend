import { useMemo } from 'react';
import { Cloudinary } from '@cloudinary/url-gen';

const useCloudinary = () => {
    return useMemo(() => {
        return new Cloudinary({
            cloud: {
                cloudName: process.env.VITE_APP_CLOUDINARY_CLOUD_NAME,
            },
        });
    }, []);
};

export default useCloudinary;
