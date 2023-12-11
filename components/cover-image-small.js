import Image from 'next/image'
import cn from 'classnames'

export default function CoverImage({ title, url, slug }) {
  const image = (
    <Image
      width={500}
      height={320}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
      src={url}
      loading="eager"
      priority={true}
      layout="responsive"
      blurDataURL={url}
      placeholder='blur'
    />  
  )

  return (
    <div className="sm:mx-0">
          {image}
    </div>
  )
}
