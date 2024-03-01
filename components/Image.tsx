import NextImage, { ImageProps } from 'next/image'

const Image = ({ src, ...rest }: ImageProps) => <NextImage src={`/BLOG${src}`} {...rest} />

export default Image