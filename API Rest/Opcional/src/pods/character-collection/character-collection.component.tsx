import * as React from 'react';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from "@mui/icons-material/Search";
import * as classes from './character-collection.styles';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';

interface Props {
  characterCollection: CharacterEntityVm[];
  onCreateCharacter: () => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onSearch: (page:string,name: string) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (props) => {
  const { characterCollection, onCreateCharacter, onEdit, onDelete, onSearch } = props;
  const [page, setPage] = React.useState(1);
  const [name, setName] = React.useState("");
  
  React.useEffect(() => {
    onSearch("1", "");
  }, []);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(page.toString(),name);
  };


  return (
    <div className={classes.root}>
      <form className="buscador" onSubmit={handleSearch}>
        <TextField
          className="txtBusqueda"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Buscar..."
          label="Nombre"
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon className="lupa" style={{ fill: "#1976D2" }} />
        </IconButton>
      </form>


      <Button variant="contained" color="primary" onClick={onCreateCharacter}>
        Add character
      </Button>

      <ul className={classes.list}>
        {characterCollection.map((char) => (
          <li key={char.id}>
            <CharacterCard character={char} onEdit={onEdit} onDelete={onDelete} />
          </li>
        ))}
      </ul>
      <Stack spacing={2}>
        <Pagination count={characterCollection.length - 1} page={page} onChange={handleSearch} />
      </Stack>
    </div>
  );
};
