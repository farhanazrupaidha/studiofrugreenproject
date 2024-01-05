import { parseISO, format } from 'date-fns'

export default function UpdatedAt({ dateString }) {
  const updatedAt = parseISO(dateString)
  return (
  <>
  <time dateTime={dateString} suppressHydrationWarning={true}>{format(updatedAt, 'd LLLL, yyyy')}</time>
  </>  
  )
}
