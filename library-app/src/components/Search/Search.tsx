import { useEffect, useState } from 'react'

interface SearchProps {
  setSearchTermValue: any
  searchTermValue: any
}

const Search = () => {
  const [searchTermValue, setSearchTermValue] = useState<string>('')

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      search()
    }, 500)
    return () => {
      clearTimeout(debounceTimeout)
    }
  }, [searchTermValue])

  function search() {
    console.log(`Searching for ${searchTermValue}...`)
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchTermValue(event.target.value)
  }

  return (
    <div>
      <input type='text' value={searchTermValue} onChange={handleInputChange} />
    </div>
  )
}

export default Search
