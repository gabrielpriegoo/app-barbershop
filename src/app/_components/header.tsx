import { MenuIcon, SquareScissors } from "lucide-react"
import Link from "next/link"
import SidebarSheet from "./sidebar-sheet"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Sheet, SheetTrigger } from "./ui/sheet"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Link href="/">
          {/* <Image src="/logo.png" alt="Logo" width={120} height={18} /> */}
          <h1 className="flex gap-1 font-bold">
            <SquareScissors className="text-[#8162FF]" />
            Barber<span className="text-[#838896]">Books</span>
          </h1>
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SidebarSheet />
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
