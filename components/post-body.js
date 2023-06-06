import postStyles from './post-styles.module.css'
import Box from '@mui/material/Box';

export default function PostBody({ content }) {
  return (
    <div
      className={`max-w-4xl mx-auto post ${postStyles.post}`}
      dangerouslySetInnerHTML={{ __html: content?.html }}
    />
  )
}
