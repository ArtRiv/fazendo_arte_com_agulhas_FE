import { getProductsBySearch } from "@/utils/actions/get-products-by-search";
import { useQuery } from "@tanstack/react-query";

export const useGetProductsBySearch = (query: string) => {
    return useQuery({
        queryKey: ["get-product-by-search", query],
        queryFn: () => getProductsBySearch(query),
    })
}