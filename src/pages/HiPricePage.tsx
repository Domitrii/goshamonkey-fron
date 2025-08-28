
import HiPrice from "../components/HiPrice/HiPrice"

type HiProp = {
  addItem: (item: {img: string, text: string, price: string, index: string, inx: number}) => void
}

function HiPricePage({addItem}: HiProp) {
  return (
    <div>
      <HiPrice addItem={addItem} />
    </div>
  )
}

export default HiPricePage