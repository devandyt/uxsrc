import React from "react"
import {
  FolderIcon,
  FishIcon,
  PastryIcon,
  CoffeeCup,
  DairyIcon,
  VegetablesIcon,
} from "./icons"

type Props = {
  name: string
}

const CategoryIcon: React.FC<Props> = ({ name }) => {
  let icon
  switch (name) {
    case "svg-store":
      icon = <FolderIcon />
      break
    case "fonts":
      icon = <FolderIcon />
      break
    case "e-books":
      icon = <FolderIcon />
      break
    case "ux-store":
      icon = <FolderIcon />
      break
    case "dairy":
      icon = <DairyIcon />
      break
    case "bakery--pastry":
      icon = <PastryIcon />
      break
    default:
      icon = null
      break
  }
  return <>{icon}</>
}

export default CategoryIcon
