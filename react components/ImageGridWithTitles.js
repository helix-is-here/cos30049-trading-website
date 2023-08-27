import * as React from 'react';
import Grid from '@mui/material/Grid';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function TitlebarBelowImageList() {
    return (
        // sx={{ width: 500, height: 450 }}
        <Grid container spacing={2}>
            {itemData.map((item) => (
                <Grid item xs={12} key={item.img}>
                    <Item>
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={item.title} a
                            subtitle={<span>by: {item.author}</span>}
                            position="below"
                        />
                    </Item>
                </Grid>
            ))}
        </Grid>
    );
}