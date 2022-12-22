import { CounterAddIcon, CounterRemoveIcon } from 'components/ui/icons'

interface Props {}

export const ItemCounter = ({}: Props) => {
  return (
    <div className="flex items-center gap-4">
      <button>
        <CounterRemoveIcon />
      </button>
      <span>1</span>
      <button>
        <CounterAddIcon />
      </button>
    </div>
  )
}
