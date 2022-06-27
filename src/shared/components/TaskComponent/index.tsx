import { FC } from 'react'
import { ITask } from '../../interfaces/task'

import { Container, Grid, IconButton, Box, Typography as Typo } from '@mui/material'
import { Delete } from '@mui/icons-material'

interface Props {
  task: ITask
  deleteTask(TaskToDelete: string): void 
}

export const TaskComponent: FC<Props> = ({ task, deleteTask }) => {
  return (
    <Container maxWidth="lg">
      <Grid container display="flex" justifyContent="center" alignItems="center" spacing={2}>
        <Grid item>
          <Box sx={{ 
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexDirection: "row",
            width: "300px",
            marginBottom: "20px"
           }}>
            
           <Typo
            variant="h6" 
            component="h2"
            color="primary"
           >
            { task.taskName }
           </Typo>
           <Typo 
            variant="body1"
            component="span"
            color="secondary"
           >
            { task.observations }
           </Typo>

          <IconButton
            arial-label="Delete task"
            color="primary"
            onClick={() => { deleteTask(task.taskName) }}
          >
            <Delete />
          </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}