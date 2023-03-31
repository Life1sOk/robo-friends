 import { SearchBoxInput } from './search-box.style';

  interface ISearchBox {
    searchChange: React.ChangeEventHandler<HTMLInputElement>,
    placeholder: string,
  }

  const SearchBox = ({searchChange, placeholder}:ISearchBox) => {
      return(
                <SearchBoxInput
                className='search-box'
                type='search' 
                placeholder={placeholder} 
                onChange={searchChange}/>
      );
  }

export default SearchBox;