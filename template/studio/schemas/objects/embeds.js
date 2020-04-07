import MdVideocam from 'react-icons/lib/md/videocam'
import MdPhotoCamera from 'react-icons/lib/md/photo-camera'
import InstagramPreview from '../components/preview/Instagram'
import EmbedPlayer from '../components/preview/EmbedPlayer'

export const instagram = {
  type: 'object',
  name: 'instagram',
  title: 'Instagram Post',
  icon: MdPhotoCamera,
  fields: [
    {
      type: 'url',
      name: 'url',
      description: 'The URL to the post as seen in a desktop browser',
    },
  ],
  preview: {
    select: { url: 'url' },
    component: InstagramPreview,
  },
}

export const videoEmbed = {
  type: 'object',
  name: 'videoEmbed',
  title: 'Video Embed',
  icon: MdVideocam,
  fields: [
    {
      type: 'url',
      name: 'url',
    },
  ],
  preview: {
    select: { url: 'url' },
    component: EmbedPlayer,
  },
}
