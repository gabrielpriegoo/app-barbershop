import BarberShopItem from "../_components/barbershop-item"
import { db } from "../_lib/prisma"

interface BarbershopsPageProps {
  searchParams: {
    search?: string
  }
}

const BarbershopsPage = async ({ searchParams }: BarbershopsPageProps) => {
  const barbershop = await db.barbershop.findMany({
    where: {
      name: {
        contains: searchParams?.search,
        mode: "insensitive",
      },
    },
  })
  return (
    <div>
      <h2 className="mb-6 mt-6 text-xs font-bold uppercase text-gray-400">
        Resultados para {searchParams?.search}
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {barbershop.map((barbershop) => (
          <BarberShopItem key={barbershop.id} barbershop={barbershop} />
        ))}
      </div>
    </div>
  )
}

export default BarbershopsPage
