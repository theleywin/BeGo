import { useEffect, useState } from "react"
import type { Order } from "../types/order"

const useFetchUpcoming = () => {
    const [ordersUpcoming, setOrdersUpcoming] = useState<Order[]>([])

    useEffect(() => {
        const fetchUpcoming = async () => {
            try {
                const response = await fetch(`https://129bc152-6319-4e38-b755-534a4ee46195.mock.pstmn.io/orders/upcoming`)
                const data = await response.json()
                setOrdersUpcoming(data.result)
            } catch (error) {
                console.error('Error fetching upcoming:', error)
            }
        }

        fetchUpcoming()
    }, [])

    return { ordersUpcoming }
}

export default useFetchUpcoming