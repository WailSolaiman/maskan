import Image from 'next/image'
import { Box } from '@chakra-ui/react'
import { Fade } from 'react-slideshow-image'

import 'react-slideshow-image/dist/styles.css'

export default function ImageScrollbar({ data }) {
  return (
    <Fade>
      {data.map((item) => (
        <Box w="full" itemID={item.id} overflow="hidden" p="1" key={item.id}>
          <Image
            alt="image"
            placeholder="blur"
            blurDataURL={item.url}
            src={item.url}
            width={1000}
            height={500}
            sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
          />
        </Box>
      ))}
    </Fade>
  )
}
