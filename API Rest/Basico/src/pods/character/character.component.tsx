import React from 'react';
import { Formik, Form } from 'formik';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import {
  TextFieldComponent,
  SelectComponent,
} from 'common/components';
import { Lookup } from 'common/models';
import { formValidation } from './character.validations';
import { CharacterVM } from './character.vm';
import * as classes from './character.styles';


interface Props {
  character: CharacterVM;
  locations: Lookup[];
  episodes: Lookup[];
  onSave: (character: CharacterVM) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, locations, episodes, onSave } = props;

  episodes.forEach(x => {
    let existe = character.episode.find(y => y.split("/")[y.split("/").length - 1] == x.id);
    if (existe) {
      x.checked = true;
    }
  });

  const handleCheck = (id:string) => {
    episodes.forEach(x=>{
      if(x.id == id){
        x.checked = !x.checked;
      }
    })    
  }

  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
      validate={formValidation.validateForm}
    >
      {() => (
        <Form className={classes.root}>
          <TextFieldComponent name="name" label="Name" />
          <TextFieldComponent name="status" label="Status" />
          <TextFieldComponent name="gender" label="Gender" />
          <SelectComponent name="location" label="Location" items={locations} />
          <List>
            {
              episodes.map((ep) => (
                <ListItem disablePadding key={ep.id}>
                  <ListItemButton>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={ep.checked}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': ep.name }}
                        onClick={(e) => handleCheck(ep.id)}
                      />
                    </ListItemIcon>
                    <ListItemText primary={ep.name} />
                  </ListItemButton>
                </ListItem>
              ))
            }
          </List>


          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};
