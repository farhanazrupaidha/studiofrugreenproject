import { useRouter } from "next/router";

import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from './cover-image'
import Link from 'next/link'

import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  tags
}) {

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

	const { locale } = useRouter();
    const { locales, asPath } = useRouter().locale;

  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} url={coverImage.url} />
      </div>
      <h3 className="mb-3 text-3xl leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="mb-4 text-lg">
        <Date dateString={date} />
      </div>
        <Stack spacing={{ xs: 1, sm: 1 }} direction="row" useFlexGap flexWrap="wrap" sx={{mt:2, mb:2}}>
            {tags.map((tag) => (
                <Chip sx={{maxWidth:200}} color="secondary" label= {tag} onClick={handleClick} />
            ))}
        </Stack>
      <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture.url} />
    </div>
  )
}
