import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

const AlignItemsList = ({pokemon}) => {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {
        pokemon?.abilities.map((ability, index) => {
          const getElementNotUndefined = (add = 0, pokemonData) => {
            let elementSRC = Object.keys(pokemonData?.sprites)[index + add]
            if(!pokemonData?.sprites[elementSRC])
              return getElementNotUndefined(1, pokemonData)
            return elementSRC
          }

          let elementSRC = getElementNotUndefined(0, pokemon)
          return (
            <ListItem key={`item-${index}`} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={pokemon?.sprites[elementSRC]} />
              </ListItemAvatar>
              <ListItemText
                primary={ability.ability.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {ability?.slot}
                    </Typography>

                  </React.Fragment>
                }
              />
            </ListItem>
          )
        })
      }
    </List>
  )
}

AlignItemsList.propTypes = {
  // eslint-disable-next-line no-undef
  pokemon: {}
}

export default AlignItemsList