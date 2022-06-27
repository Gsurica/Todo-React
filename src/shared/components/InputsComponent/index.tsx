import { ChangeEvent, FC, useState } from 'react'
import { Container, Grid, Button, TextField } from '@mui/material'
import { Delete, Send } from '@mui/icons-material'
import { ITask } from "../../interfaces/task"
import { TaskComponent } from '../TaskComponent'

export const InputsComponent: FC = () => {

  const [task, setTask] = useState<string>("")
  const [obs, setObs] = useState<string>("")
  const [listTask, setListTask] = useState<ITask[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value)
    } else {
      setObs(event.target.value)
    }
  }      

  const addTask = (): void => {
    const newTask: ITask = {taskName: task, observations: obs}
    setListTask([...listTask, newTask])
    setTask("")
    setObs("")
  }

  const deleteTask = (taskToDelete: string): void => {
    setListTask(listTask.filter(task => {
      return task.taskName !== taskToDelete
    }))
  }

  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={2} display="flex" justifyContent="center" alignItems="center">
          <Grid item> 
            <TextField 
              variant="standard" 
              label="Tarefa" 
              color="primary" 
              onChange={handleChange} 
              name="task"
            ></TextField>
          </Grid>
          <Grid item> 
            <TextField 
              variant="standard" 
              label="Observação" 
              color="primary"
              name="obs"
              onChange={handleChange}
            ></TextField>
          </Grid>
          <Grid item> 
            <Button 
              variant="outlined" 
              endIcon={<Send />} 
              color="primary" 
              onClick={addTask} 
            > Postar 
            </Button>
          </Grid>
          <Grid item> 
            <Button 
              variant="outlined" 
              endIcon={<Delete />} 
              color="secondary"
            > Apagar 
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg" sx={{
        marginTop: "20px",
      }}>
        { listTask.map((task: ITask, key: number) => {
          return <TaskComponent task={task}  key={key} deleteTask={deleteTask} />
        }) }
      </Container>
    </>
  )
}