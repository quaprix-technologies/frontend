const getConfig = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL || "";
  const contactFormEmailReceiver = import.meta.env
    .VITE_APP_CONTACT_FORM_EMAIL_RECEIVER;
  const careersFormEmailReceiver = import.meta.env
    .VITE_APP_CAREERS_FORM_EMAIL_RECEIVER;
  const cloudinaryCloudName = import.meta.env.VITE_APP_CLOUDINARY_CLOUD_NAME;

  return {
    baseUrl,
    contactFormEmailReceiver,
    careersFormEmailReceiver,
    cloudinaryCloudName,
  };
};

export default getConfig;
