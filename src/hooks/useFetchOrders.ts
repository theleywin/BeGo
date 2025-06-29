import { useEffect, useState } from "react"
import type {FullOrder} from "../types/fullOrder.ts";

const useFetchOrders = () => {
    const [orders, setOrders] = useState<FullOrder | null>(null)

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch(`https://129bc152-6319-4e38-b755-534a4ee46195.mock.pstmn.io/orders`)
                const data = await response.json()
                setOrders(data.result)
            } catch (error) {
                console.error('Error fetching upcoming:', error)
            }
        }

        fetchOrders()
    }, [])

    return { orders }
}

export default useFetchOrders