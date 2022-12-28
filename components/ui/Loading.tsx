import { LoaderIcon } from './icons/LoaderIcon'

export const Loading = () => {
  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen bg-scroll bg-black bg-opacity-60 backdrop-blur-sm">
      <LoaderIcon />
    </div>
  )
}
