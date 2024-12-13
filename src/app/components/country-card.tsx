import { UsersIcon } from "lucide-react";
import { useTheme } from "next-themes";



const CountryCard = (country: any) => {

    const { theme } = useTheme()


    return (
        <div className="max-w-sm rounded-xl overflow-hidden shadow-2xl shadow-gray-700  m-5">
            <img className="h-60 w-full" src={country.flags.png} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{country.name.common}</div>
                <p className={`${theme === 'light' ? "text-slate-300" : 'text-slate-700'}`}>
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
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{` `}{country.area}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{``}{country.region}</span>
            </div>
        </div>
    )
}

export default CountryCard;