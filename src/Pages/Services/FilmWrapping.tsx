import FilmServiceCarousel from '../../components/services/FilmServiceCarousel'
import ServiceIntro from './ServiceIntro'
import PPFShowcase from '../../components/services/PPFShowcase'
import { InfiniteMovingCardsDemo } from '../../components/services/InfiniteMovingCardsDemo'

function FilmWrapping() {
  return (
    <>
      <FilmServiceCarousel/>
      <ServiceIntro/>
      <PPFShowcase/>
      <InfiniteMovingCardsDemo/>

    </>  )
}

export default FilmWrapping