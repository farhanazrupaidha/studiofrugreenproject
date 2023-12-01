import dynamic from 'next/dynamic'
import Link from 'next/link'

const Avatar = dynamic(() => import('components/avatar'), {
  ssr: false,
});
const Date = dynamic(() => import('components/date'), { 
  ssr: false,
});
const CoverImage = dynamic(() => import('components/cover-image'),{ 
ssr: false,
});

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  maxWidth: 700,
  width:'100%'
}));

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  tags
}) {

  return (
    <Box sx={{bgcolor: 'background.default'}}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 5, sm: 2, md: 4 }}
      >
        <Item>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} url={coverImage.url} />
      </div>
      <h3 className="mb-3 text-3xl leading-snug">
        <Link href={`/en/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="mb-4 text-lg">
        <Date dateString={date} />
      </div>
      <Stack spacing={{ xs: 1, sm: 1 }} direction="row" useFlexGap flexWrap="wrap" sx={{mt:2, mb:2}}>
            {tags.map((tag) => (
              <ul key={tag}>
                <Chip sx={{maxWidth:200}} color="secondary" label= {tag} />
              </ul>  
            ))}
        </Stack>
      <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture.url} />
    </Item>
    </Stack>
  </Box>  
  )
}
