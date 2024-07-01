import React from 'react';
import { Formik, Form } from 'formik';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
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
    let existe = character.episode.find(y => y.name == x.name);
    if (existe) {
      x.checked = true;
    }
  });

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
          <TextFieldComponent name="url" label="Url" />
          <SelectComponent name="location.name" label="Location" items={locations} />
          <TextFieldComponent name="bestSentences" label="Best Sentences" multiline={true} rows={3} />
          <InputLabel style={{margin:'5px 0px', fontSize:'20px', color:'#1976D2', alignSelf:'start'}}>Episodes</InputLabel>
          <List style={{width:'100%', height:'300px', border:'solid 2px #1976D2', margin:'10px', overflow: 'auto'}}>
          
            {
              episodes.map((ep) => (
                <ListItem disablePadding key={ep.id}>
                  <ListItemButton>
                    <ListItemIcon>
                    {ep.checked && (<CheckIcon style={{fill:'green'}}/>)}{!ep.checked && (<CloseIcon style={{fill:'red'}}/>)}
                    </ListItemIcon>
                    <ListItemText primary={ep.name} />
                  </ListItemButton>
                </ListItem>
              ))
            }
          </List>


          <Button style={{width:'100%'}} type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};
