export type Station = {
  id: string
  name: string
  distanceKm: number
  address: string
  phone: string
  isOpen: boolean
  closesAt: string
  rating: number
  reviews: number
  eta: string
  imageUrl?: string
}

export const stations: Station[] = Array.from({ length: 12 }).map((_, i) => {
  const open = i % 3 !== 2
  return {
    id: String(i + 1),
    name: 'LPG Gas Station Lorem Ipsum',
    distanceKm: 4.0,
    address: 'F9F6+M6W, Lane No. 3',
    phone: '+1 (555) 2390001',
    isOpen: open,
    closesAt: open ? '10 pm' : '7 am Tue',
    rating: open ? 5.0 : 4.9,
    reviews: open ? 58 : 108,
    eta: '2.5 km/40min',
    imageUrl: `https://picsum.photos/seed/ezgas-${i}/640/320`,
  }
})

export type Order = {
  id: string
  service: string
  status: 'IN PROGRESS' | 'ACTIVE' | 'CANCELED' | 'COMPLETED'
  price: number
  placedAt: string
}

export const orders: Order[] = [
  { id: '#96459761', service: 'Cylinder Refill', status: 'IN PROGRESS', price: 1199, placedAt: '17 Jan, 2021 at 7:32 PM' },
  { id: '#96459761', service: 'Bulk LPG Supply', status: 'ACTIVE', price: 1199, placedAt: '17 Jan, 2021 at 7:32 PM' },
  { id: '#96459761', service: 'LPG Consultancy', status: 'CANCELED', price: 1199, placedAt: '17 Jan, 2021 at 7:32 PM' },
  { id: '#96459761', service: 'Mobile Gas Refilling Stations', status: 'IN PROGRESS', price: 1199, placedAt: '17 Jan, 2021 at 7:32 PM' },
  { id: '#96459761', service: 'Installation Services', status: 'COMPLETED', price: 1199, placedAt: '17 Jan, 2021 at 7:32 PM' },
]

export const cylinders = [
  { label: '3kg', value: 3 },
  { label: '5kg', value: 5 },
  { label: '6kg', value: 6 },
  { label: '12.5kg', value: 12.5 },
  { label: '25kg', value: 25 },
  { label: '50kg', value: 50 },
]
