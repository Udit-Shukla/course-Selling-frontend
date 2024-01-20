import React from 'react'
import{Button, Card, CardContent, Typography} from '@mui/material'

const Cards = (props) => {
        return (
            <Card variant="outlined" sx={{Width:300}}>
            <CardContent>
                <Typography variant="h6" color="text.primary">{props.course.title}</Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>{props.course.description}</Typography>
                <Typography variant="body1" color="text.secondary">${props.course.price}</Typography>
                <div className='flex flex-row gap-4'>
                <Button variant="contained" color="primary">Buy Now</Button>
                <Button variant="contained" color="error">Edit</Button>
                </div>

            </CardContent>
            </Card>
    )
}

export default Cards