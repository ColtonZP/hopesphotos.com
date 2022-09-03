export const getImagesFromFolder = async (folder: string) => {
  const imagesFetch = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/search/?expression=folder=${folder}`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${process.env.CLOUDINARY_API_KEY}:${process.env.CLOUDINARY_API_SECRET}`,
        ).toString('base64')}`,
      },
    },
  ).then(res => res.json())

  const { resources } = imagesFetch

  return (
    resources?.map(resource => ({
      id: resource.asset_id,
      title: resource.public_id,
      url: resource.secure_url,
      width: resource.width,
      height: resource.height,
    })) || []
  )
}
