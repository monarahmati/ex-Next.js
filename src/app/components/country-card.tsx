// import Image from "next/image";

import { UsersIcon } from "lucide-react";



const CountryCard = (country: any) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-5">
            <img className="h-60 w-full" src={country.flags.png} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{country.name.common}</div>
                <p className="text-gray-700 text-base">
                    {country.name.official}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    <div className="flex">
                        <UsersIcon className="size-3.5 mr-2" />
                        {Number(country.population).toLocaleString()}
                    </div>
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{``}{country.area}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{``}{country.region}</span>
            </div>
        </div>
    )
}

export default CountryCard;