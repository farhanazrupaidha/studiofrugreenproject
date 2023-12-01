import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return (
  <>
  <time dateTime={dateString} suppressHydrationWarning={true}>{format(date, 'd LLLL, yyyy')}</time>
  </>  
  )
}
