import Image from 'next/image'
import { BrandLogoName } from './brand-logo-name'

export const Vale4YouLogo = () => {
  return (
    <div className="flex flex-row items-end gap-1">
      <Image
        src="/gift-box.png"
        width={60}
        height={60}
        className=""
        alt="Gift box"
      />
      <BrandLogoName className="mb-1" />
    </div>
  )
}
