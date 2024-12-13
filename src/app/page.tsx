'use client'

import useCountry from "@/hooks/use-country";
import Navbar from "./components/Navbar";
import CountryCard from "./components/country-card";
import Header from "./components/Header";
import { MouseEventHandler, useState } from "react";
import { ChangeEventHandler } from "react";

interface countriesData {
  name: {
    common: string
    official: string
  }
  flags: {
    png: string
  }
  population: number
  area: string
  region: string

}

export default function Home() {

  const { data } = useCountry()
  console.log(data);

  const [searchBar, setSearchBar] = useState<string>("")
  const [filter, setFilter] = useState()


  const searchHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    // e.preventDefault();
    setSearchBar(e.target.value)
  }

  const countriesData = data?.filter(country =>
    country?.name?.common.toLowerCase().startsWith(searchBar.toLowerCase()) ||
    (`${country?.name?.common}`).toLowerCase().startsWith(searchBar.toLowerCase())

  )

  const sortedHandler: MouseEventHandler<HTMLButtonElement> = () => {
    const sortedData = data?.sort((a: any, b: any) => b?.population - a?.population)
    setFilter(sortedData)
  }


  // const countries = countriesData || filter

  return (
    <div>
      <Navbar />
      <Header
        value={searchBar}
        placeholder={`Search by name`}
        searchHandler={searchHandler}
        sortedHandler={sortedHandler}
      />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 p-10 m-5">
        {
          countriesData?.map((country, i) => (
            <div key={i}>
              <CountryCard {...country} />
            </div>
          ))
        }
      </div>
    </div>
  );
}
// 