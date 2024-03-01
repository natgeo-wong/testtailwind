import NextImage, { ImageProps } from 'next/image'

const Image = ({ src, ...rest }: ImageProps) => {
  return (
    <NextImage src={`/tBLOG${src}`} {...rest} />
  )
}

export default Image