import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function PostHeader({ title, coverImage, date, author, tags }) {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-6 text-lg">
        <Date dateString={date} />
      </div>
        <Stack spacing={{ xs: 1, sm: 1 }} direction="row" useFlexGap flexWrap="wrap" sx={{mt:2, mb:2}}>
            {tags.map((tag) => (
                <Chip sx={{maxWidth:200}} color="secondary" label= {tag} onClick={handleClick} />
            ))}
        </Stack>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture.url} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block mb-6 md:hidden">
          <Avatar name={author.name} picture={author.picture.url} />
        </div>
      </div>
      <div className="mb-8 -mx-5 md:mb-16 sm:mx-0">
        <CoverImage title={title} url={coverImage.url} />
      </div>
    </>
  )
}
