import dynamic from 'next/dynamic'

const Avatar = dynamic(() => import('components/avatar'), {
  ssr: false,
});
const Date = dynamic(() => import('components/date'), { 
  ssr: false,
});
const UpdatedAt = dynamic(() => import('components/updated-at'), { 
  ssr: false,
});
const CoverImage = dynamic(() => import('components/cover-image'),{ 
ssr: false,
});
const PostTitle = dynamic(() => import('components/post-title'),{ 
  ssr: false,
  });

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function PostHeader({ title, coverImage, date, updatedAt, author, tags }) {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-2 text-lg">
       first published at: <Date dateString={date} />
      </div>
      <div className="mb-6 text-lg">
       updated at: <UpdatedAt dateString={updatedAt} />
      </div>
        <Stack spacing={{ xs: 1, sm: 1 }} direction="row" useFlexGap flexWrap="wrap" sx={{mt:2, mb:2}}>
            {tags.map((tag) => (
              <ul key={tag}>
                <Chip sx={{maxWidth:200}} color="secondary" label= {tag} />
              </ul>  
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
